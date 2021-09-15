import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Application = () => {
  const { applications, code } = useGlobalContext();

  const { firstName, lastName, tc, age, reason, address, image, answer } =
    applications.filter((item) => item.id === code)[0];

  return (
    <div className='Form'>
      <h1>Sorgulanan Başvurunuz</h1>
      <div className='flex-column'>
        {answer ? (
          <h2>Başvuru Durumu : Çözüldü</h2>
        ) : (
          <h2>Başvuru Durumu : Cevap bekleniyor</h2>
        )}
        {image && (
          <img
            src={image}
            alt='Applicant'
            style={{ height: 150, marginBottom: 15 }}
          ></img>
        )}
        <h3>İsim : {firstName}</h3>
        <h3>Soyisim : {lastName}</h3>
        <h3>Yaş : {age}</h3>
        <h3>TCKN : {tc}</h3>
        <h3>Başvuru Sebebi : {reason}</h3>
        <h3>Adres : {address}</h3>
        {answer && <h3 className='answer'>Cevap : {answer}</h3>}
      </div>

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

export default Application;
