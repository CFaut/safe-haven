import React, { useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import { getFacts } from "../../api";
import { useDispatch } from "react-redux";

export default function Home() {
  let [fact, setFact] = useState('')
  const dispatch = useDispatch();

  console.log(fact)
  function showFact() {
    getFacts().then(response => {
      dispatch(
        setFact(response)
      ) })
  }

  return(
    <section className='home-container'>
      <h2>We are passionate about helping animals find their forever homes</h2>
      <div className='pet-card'>
          <Link to={'./cats'} className='cat-link'>
            <p>Adopt a Cat</p>
            <img src={'../../../images/home/cat.jpg'} loading='lazy' alt='adopt-cat'/>
          </Link>
          <Link to={'./dogs'} className='dog-link'>
            <p>Adopt a Dog</p>
            <img src={'../../../images/home/dog.jpg'} loading='lazy' alt='adopt-dog'/>
          </Link>
      </div>
      <button className='fact-btn' onClick={showFact}>Click for a random cat fact!</button>
      <p id='fact'>{fact}</p> 
    </section>
  )
}