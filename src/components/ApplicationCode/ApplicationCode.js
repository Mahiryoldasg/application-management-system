import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const ApplicationCode = () => {
  const { applications, lastApplication } = useGlobalContext();
  let query = applications.filter((item) => item.tc === lastApplication);
  return (
    <div className='Form'>
      <h2>Başvurunuz alınmıştır</h2>
      <h3>
        Başvuru sorgulama kodunuz : <span>{query[0].id}</span>
      </h3>
      <Link to='/'>
        <input
          className='link input'
          type='button'
          value='Ana ekrana dönmek için tıklayınız.'
        />
      </Link>
    </div>
  );
};

export default ApplicationCode;
