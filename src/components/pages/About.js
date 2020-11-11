import React, { Fragment } from 'react';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <Fragment>
      <h1 className='mb-1'>About Contact Keeper</h1>
      <p>This is a MERN app for keeping contacts.</p>
      <p>App version: 1.0.0</p>
      <Footer />
    </Fragment>
  )
}

export default About;
