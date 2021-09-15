import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Admin = () => {
  const { applications, isAdmin, setisAdmin, setUser } = useGlobalContext();
  let history = useHistory();

  if (!isAdmin) {
    history.push('/admin');
  }

  const Logout = () => {
    setUser({ userName: '', password: '' });
    setisAdmin(false);
    history.push('/');
  };

  return (
    <div className='Form' style={{ width: 1200 }}>
      <div className='nav-header'>
        <h1>Admin Paneli</h1>
        <input
          className='link input'
          type='button'
          value='Çıkış yap'
          onClick={Logout}
        />
      </div>
      <div className='flex'>
        <div>
          <h2>Bekleyen Başvurular</h2>
          <ul>
            {applications.map((item) => {
              const { id, firstName, lastName, answer } = item;
              if (!answer) {
                return (
                  <li key={id} className='list'>
                    <span>
                      {firstName} {lastName}
                    </span>
                    <Link to={`/admin/basvuru/${id}`}>
                      <button className='link input'>
                        Başvuruyu görüntüle
                      </button>
                    </Link>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div>
          <h2>Cevaplanmış Başvurular</h2>
          <ul>
            {applications.map((item) => {
              const { id, firstName, lastName, answer } = item;
              if (answer) {
                return (
                  <li key={id} className='list'>
                    <span>
                      {firstName} {lastName}
                    </span>
                    <Link to={`/admin/basvuru/${id}`}>
                      <button className='link input'>
                        Başvuruyu görüntüle
                      </button>
                    </Link>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
