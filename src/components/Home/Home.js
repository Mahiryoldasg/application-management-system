import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Form'>
      <div className='title'>Hoşgeldiniz..</div>
      <div className='inputs'>
        <Link data-testid='form' to='/basvuru'>
          <input
            className='link'
            type='button'
            value='Başvuru Formu için tıklayınız.'
          />
        </Link>
        <Link data-testid='query' to='/basvuru-sorgula'>
          <input
            className='link'
            type='button'
            value='Başvuru sorgulamak için tıklayınız.'
          />
        </Link>
        <Link data-testid='admin' to='/admin'>
          <input
            className='link'
            type='button'
            value='Admin Paneli için tıklayınız.'
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
