import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import Error from '../Error/Error';
import firebase from '../../firebase/firebase';

const SingleApplication = () => {
  const { applications, isAdmin } = useGlobalContext();
  const { id } = useParams();
  const [lastAnswer, setLastAnswer] = useState('');
  const history = useHistory();

  if (!isAdmin) {
    return <Error />;
  }

  const { firstName, lastName, tc, age, reason, address, image, answer } =
    applications.filter((item) => item.id === id)[0];

  const onAnswer = async () => {
    await firebase.firestore().collection('applications').doc(`${id}`).update({
      firstName,
      lastName,
      tc,
      age,
      reason,
      address,
      image,
      answer: lastAnswer,
    });
    history.push('/admin/basvuru');
  };

  return (
    <div className='Form'>
      <h1>Admin Paneli</h1>
      <h2>Seçili Başvuru</h2>
      <div className='flex-column'>
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
      <div className='inputs'>
        <input
          type='text'
          name='answer'
          value={lastAnswer}
          onChange={(e) => setLastAnswer(e.target.value)}
          placeholder='Cevabınız'
        />
        <input
          onClick={onAnswer}
          className='link input'
          type='button'
          value='Başvuruyu cevapla'
        />
        <Link to='/admin/basvuru'>
          <input className='link input' type='button' value='Geri dön' />
        </Link>
      </div>
    </div>
  );
};

export default SingleApplication;
