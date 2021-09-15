import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const ApplicationQuery = () => {
  const { applications, code, setCode } = useGlobalContext();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    let docId = applications.filter((item) => item.id === code);
    if (docId.length > 0) {
      setCode(docId[0].id);
      history.push(`/basvuru/${docId[0].id}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className='Form'>
      <div className='inputs'>
        <form>
          <input
            type='text'
            name='codeInput'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder='Başvuru sorgulama kodunuzu giriniz '
          />

          {error && (
            <p>
              Aradığınız başvuruyu sistemde bulamadık. Yeniden başvuru yapmak
              için anasayfaya dönebilirsiniz.
            </p>
          )}
          <input
            className='link'
            type='button'
            id='submit'
            value='Sorgula'
            onClick={handleClick}
          />
          <Link to='/'>
            <input className='link' type='button' value='Geri dön' />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ApplicationQuery;
