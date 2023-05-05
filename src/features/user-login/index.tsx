import React, {useState} from 'react';
import {lang, setUser} from './model';
import * as yup from 'yup';
import {useFormik} from 'formik';
import LoginForm from '@widgets/login-form';
import {handleLogin} from '@features/user-login/api';
import toastAlert from '@shared/helpers/toast';
import {NextRouter, useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {panel} from '@shared/constants/routes';

const UserLogin = () => {

  // States
  const [loading, setLoading] = useState(false);

  // Hooks
  const dispatch = useDispatch();
  const router: NextRouter = useRouter();

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
      handleLogin(values).then((response) => {
        if (response) {
          const {message, user} = response;
          toastAlert(message, 'success');
          dispatch(setUser({
            ...user,
            isLoggedIn: true,
          }));
          router.push(panel.dashboard).then();
        }
      });
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