import Footer from "../footer/Footer";
import Header from "../header/Header";
import ToursData from '../../data/db.json';
import Tours from "../tours/Tours";
import React from 'react';

function Home() {
  return (
    <div className="container">
      <Header/>
      <Tours db={ToursData}/> 
      <Footer/>
    </div>
  );
}

export default Home; 