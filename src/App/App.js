import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/home';
import AboutUs from '../components/aboutUs/aboutUs';
import ContactUs from '../components/contactUs/contactUs';
import Cats from '../components/cats/cats';
import Dogs from '../components/dogs/dogs';
import Header from '../components/header/header';
import IndividualCat from '../components/cats/individualCat';
import IndividualDog from '../components/dogs/individualDog';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'
          element={<Home/>}
        />
        <Route path='/about-us'
          element={<AboutUs/>}
        />
        <Route path='/cats'
          element={<Cats/>}
        />
        <Route path='/cats/:catName' 
          element={<IndividualCat/>}
          />
        <Route path='/dogs'
          element={<Dogs/>}
        />
        <Route path='/dogs/:dogName' 
          element={<IndividualDog/>}
          />
        <Route path='/contact-us'
          element={<ContactUs/>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
