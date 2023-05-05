import React, {useState} from 'react';
import {lang} from './model';
import * as yup from 'yup';
import {useFormik} from 'formik';
import LoginForm from '@widgets/login-form';

const UserLogin = () => {
  // States
  const [loading, setLoading] = useState(false);
  // Form
  const validationSchema = yup.object().shape({
    email: yup.string()
      .email(lang.validation.emailValidation)
      .required(lang.validation.emailRequired),
    password: yup.string()
      .min(8, lang.validation.passwordValidation)
      .required(lang.validation.passwordRequired),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
    },
  });

  return (
    <>
      <h1 className='h3 text-center mb-3'>{lang.title}</h1>
      <p className='text-center mb-5'>{lang.description}</p>
      <LoginForm lang={lang} formik={formik} loading={loading} />
    </>
  );
};

export default UserLogin;