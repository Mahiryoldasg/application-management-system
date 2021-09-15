import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='Form'>
      <h2>404 (Aradığını bulamadık)</h2>
      <Link to='/'>
        <input
          className='link input'
          type='button'
          value='Ana ekrana dönmek için tıklayınız.'
        />
      </Link>
    </div>
  );
}

export default Error;
