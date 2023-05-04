import React, {ReactElement, ReactNode} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styles from '@styles/layouts/authentication.module.scss';
import {Roboto} from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

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
      <Container fluid className={`${roboto.className} g-0`}>
        <Row className='g-0'>
          <Col>
            {children}
          </Col>
          <Col className={styles.wrapper}>
            {/*<Aside />*/}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthenticationLayout;