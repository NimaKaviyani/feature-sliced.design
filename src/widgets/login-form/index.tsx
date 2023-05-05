import React from 'react';
import FormInputGroup from '@entities/form-input-group';
import LoadingButton from '@entities/loading-button';
import {Form} from 'react-bootstrap';

const LoginForm = ({formik, lang, loading}) => {
  return (
      <Form onSubmit={formik.handleSubmit}>
        <FormInputGroup
          label={lang.emailLabel}
          placeholder={lang.emailPlaceholder}
          required={true}
          {...formik.getFieldProps('email')}
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormInputGroup
          label={lang.passwordLabel}
          placeholder={lang.passwordPlaceholder}
          required={true}
          {...formik.getFieldProps('password')}
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='password'
        />
        <LoadingButton
          variant='outline-primary'
          type='submit'
          className='d-block w-100'
          disabled={!(formik.dirty && formik.isValid)}
          loading={loading}
        >
          {lang.submit}
        </LoadingButton>
      </Form>
  );
};

export default LoginForm;