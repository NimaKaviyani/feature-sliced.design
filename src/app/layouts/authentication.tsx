import React, {ReactElement, ReactNode} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styles from '@styles/layouts/authentication.module.scss';
import {Inter} from 'next/font/google';
import Head from 'next/head';
import AuthenticationAside from '@widgets/authentication/authentication-aside';

const inter = Inter({subsets: ['latin']});

interface LayoutProps {
  children: ReactNode,
}

const AuthenticationLayout = ({children}: LayoutProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container fluid className={`${inter.className} g-0`}>
        <Row className='g-0'>
          <Col>
            {children}
          </Col>
          <Col className={styles.wrapper}>
            <AuthenticationAside />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthenticationLayout;