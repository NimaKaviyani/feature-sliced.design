import React from 'react';
import {ListGroup, Navbar} from 'react-bootstrap';
import styles from '@styles/widgets/panel-sidebar.module.scss';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='d-flex flex-column align-content-stretch w-100'>
      <Navbar bg='light' variant='dark' className={`${styles.navbar} border-bottom border-white`}>
        <Navbar.Brand
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.navbarBrand}
        >
          By{' '}
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </Navbar.Brand>
      </Navbar>
      <ListGroup defaultActiveKey='#link1' className='w-100' variant='flush'>
        <ListGroup.Item action href='#link1' variant='dark'>
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item action href='#link2' variant='dark'>
          Users
        </ListGroup.Item>
        <ListGroup.Item action href='#link3' variant='dark'>
          Posts
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;