import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import firebase from '../../firebase/firebase';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { useState } from 'react';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .strict()
    .trim('Adınızın başında veya sonunda boşluk olmamalı!')
    .required('Bu bölümü boş bırakamazsınız'),
  lastName: yup
    .string()
    .strict()
    .trim('Soyadınızın başında veya sonunda boşluk olmamalı!')
    .required('Bu bölümü boş bırakamazsınız'),
  age: yup
    .number('Yaşınız rakamlardan oluşmalı!')
    .positive('Yaşınız 0 veya negatif olamaz!')
    .integer('sayı olmalı')
    .max(130, 'Yaşınız çok büyük!')
    .typeError('Yaşınız rakamlardan oluşmalı!'),
  tc: yup
    .number()
    .positive()
    .min(10000000000, 'TCKN en az 11 haneli olmalı!')
    .max(99999999999, 'TCKN en fazla 11 haneli olmalı!')
    .typeError('TCKN rakamlardan oluşmalı!'),
  reason: yup.string().required('Lütfen başvuru sebebinizi belirtiniz.'),
  address: yup.string().required('Lütfen adres bilgilerinizi giriniz.'),
  // image: yup.mixed().required(),
});

function Form() {
  const { setLastApplication } = useGlobalContext();
  const [fileUrl, setFileUrl] = useState(null);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    validationSchema: schema,
  });

  const submitForm = async (data) => {
    let finalData = {
      ...data,
      image: fileUrl,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    await firebase.firestore().collection('applications').add(finalData);
    setLastApplication(data.tc);
    history.push('/basvuru/basarili');
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  return (
    <div className='Form'>
      <div className='title'>Başvuru Formu</div>
      <div className='inputs'>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type='text'
            name='firstName'
            placeholder='Ad...'
            {...register('firstName')}
          />
          <p> {errors.firstName?.message} </p>
          <input
            type='text'
            name='lastName'
            placeholder='Soyad...'
            {...register('lastName')}
          />
          <p> {errors.lastName?.message} </p>
          <input
            type='text'
            name='age'
            placeholder='Yaş...'
            {...register('age')}
          />
          <p> {errors.age?.message} </p>
          <input
            type='text'
            name='tc'
            placeholder='TCKN...'
            {...register('tc')}
          />
          <p> {errors.tc?.message} </p>
          <input
            type='text'
            name='reason'
            placeholder='Başvuru sebebiniz '
            {...register('reason')}
          />
          <p> {errors.reason?.message} </p>
          <input
            type='text'
            name='address'
            placeholder='Adres'
            {...register('address')}
          />
          <p> {errors.address?.message} </p>

          <input
            type='file'
            name='image'
            onChange={onFileChange}
            // {...register('image')}
          />
          <p> {errors.image?.message} </p>

          <input className='link' type='submit' id='submit' />
        </form>
        <Link to='/'>
          <input
            className='link input'
            type='button'
            value='Ana ekrana dönmek için tıklayınız.'
          />
        </Link>
      </div>
    </div>
  );
}

export default Form;
