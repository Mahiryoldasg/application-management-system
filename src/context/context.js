import React, { useState, useEffect, useContext } from 'react';
import firebase from '../firebase/firebase';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [lastApplication, setLastApplication] = useState('');
  const [code, setCode] = useState('');
  const [isAdmin, setisAdmin] = useState(false);
  const [user, setUser] = useState({ userName: '', password: '' });

  useEffect(() => {
    const store = firebase.firestore().collection('applications');
    function getData() {
      store.orderBy('createdAt', 'desc').onSnapshot((querySnapShot) => {
        const items = [];
        querySnapShot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setApplications(items);
      });
    }
    getData();
    return () => getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        applications,
        lastApplication,
        setLastApplication,
        code,
        setCode,
        isAdmin,
        setisAdmin,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
