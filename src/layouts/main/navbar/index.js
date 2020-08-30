/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from 'antd';
import {useLocation, useHistory} from 'react-router-dom';
import {useUser} from 'providers/user';
import {NavbarContainer, Menu} from './elements';

const {Item} = Menu;

const NavBar = () => {
  const {setToken} = useUser();
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => setToken();

  const format = (pathname) => {
    const title = pathname
      .substring(pathname.lastIndexOf('/') + 1)
      .replace(/-/g, ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <NavbarContainer>
      <Menu
        mode="horizontal"
        style={{display: 'flex', justifyContent: 'flex-end'}}
      >
        <PageHeader
          style={{marginRight: 'auto', padding: '0px 20px'}}
          onBack={() => history.goBack()}
          title={format(location.pathname)}
        />
        <Item key="1" disabled={true}>
          Foo Bar
        </Item>
        <Item key="3" onClick={handleLogout}>
          <span>Salir</span>
        </Item>
      </Menu>
    </NavbarContainer>
  );
};

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default NavBar;
