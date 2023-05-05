import React, {useEffect, useState} from 'react';
import {Navbar} from 'react-bootstrap';
import styles from '@styles/widgets/panel-header.module.scss';
import {selectUser} from '@features/user-login/model';
import {useSelector} from 'react-redux';

const Header = () => {
  // States
  const [fullName, setFullName] = useState('');
  // Hooks
  const user = useSelector(selectUser);
  // Lifecycle
  useEffect(() => {
    if (user) {
      setFullName(user.fullName)
    }
  }, [user]);

  return (
    <>
      <Navbar bg='light' variant='dark' className={`${styles.navbar} border-bottom border-white`}>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end pe-3'>
          <Navbar.Text>
            Signed in as: <a href='#'>{fullName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;