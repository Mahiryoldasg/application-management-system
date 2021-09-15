import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

function AdminAuth() {
  const { setisAdmin, user, setUser } = useGlobalContext();
  const adminUser = { userName: 'kodluyoruz', password: 'bootcamp109' };
  const [error, setError] = useState(false);
  let history = useHistory();

  const Login = () => {
    if (JSON.stringify(user) === JSON.stringify(adminUser)) {
      setisAdmin(true);
      history.push('/admin/basvuru');
    } else {
      setError(true);
    }
  };

  const Logout = () => {
    setUser({ userName: '', password: '' });
    history.push('/');
  };
  return (
    <div className='Form'>
      <div className='title'>Admin Girişi</div>
      <div className='inputs'>
        <form>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Kullanıcı Adı..'
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          ></input>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Şifre..'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>

          {error && <p> Kullanıcı adı veya şifre hatalı. </p>}

          <input
            className='link'
            type='button'
            value='Giriş yap'
            onClick={Login}
          />
          <input
            className='link'
            type='button'
            value='Anasayfaya dön'
            onClick={Logout}
          />
        </form>
      </div>
    </div>
  );
}

export default AdminAuth;
