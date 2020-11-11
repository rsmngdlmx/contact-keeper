import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <Link to={ `${baseUrl}` }>
        <div className='navbar-title'>
          <i className={ icon } /> { title }
        </div>
      </Link>
      <ul>
        <li>
          <Link to={ `${baseUrl}about` }>About</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
}

export default Navbar;
