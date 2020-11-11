import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    <Fragment>
      <h1>Contact Keeper</h1>
      <div className="grid-2">
        <div>{ /* ContactForm */ }</div>
        <div><Contacts /></div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home;
