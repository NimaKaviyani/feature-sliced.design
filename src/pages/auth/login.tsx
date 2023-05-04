import {Col, Form, Row, Button} from 'react-bootstrap';
import React, {ReactElement} from 'react';
import Authentication from '@app/layouts/authentication';
import styles from '@styles/pages/login.module.scss';

const Login = () => {

  return (
    <>
      <section className={styles.authForm}>
        <Row className='justify-content-center'>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col>
                <Form>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check me out' />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
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