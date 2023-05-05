import {Col, Row} from 'react-bootstrap';
import React, {ReactElement} from 'react';
import Authentication from '@app/layouts/authentication';
import styles from '@styles/pages/login.module.scss';
import UserLogin from 'features/user-login';

const Login = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <Row className='justify-content-center w-100'>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col>
                <UserLogin />
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