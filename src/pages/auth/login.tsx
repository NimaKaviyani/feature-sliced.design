import {Col, Form, Row, Button} from 'react-bootstrap';
import React, {ReactElement, useState} from 'react';
import Authentication from '@app/layouts/authentication';
import styles from '@styles/pages/login.module.scss';
import FormInputGroup from '@entities/form-input-group';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <section className={styles.wrapper}>
        <Row className='justify-content-center w-100'>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col>
                <h1 className='h3 text-center mb-5'>Login</h1>
                <Form>
                  <FormInputGroup
                    label='Email address'
                    placeholder='Emter email'
                    name='email'
                    value={email}
                    error={''}
                    onChange={() => null}
                    onBlur={() => null}
                  />
                  <FormInputGroup
                    label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={password}
                    error={''}
                    onChange={() => null}
                    onBlur={() => null}
                  />
                  <Button variant='outline-primary' type='submit' className='d-block w-100'>
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Authentication>
      {page}
    </Authentication>
  );
};

export default Login;