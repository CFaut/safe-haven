import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import { getFacts } from "../../api";
import { useDispatch } from "react-redux";

export default function Home() {
  let [fact, setFact] = useState('')
  const dispatch = useDispatch();

    // useEffect(() => {
    //   getFacts().then(response => {
    //     dispatch(
    //       setFact(response)
    //     ) })
    // }, [dispatch])

  console.log(fact)
  function showFact() {
    getFacts().then(response => {
      dispatch(
        setFact(response)
      ) })
  }

  return(
    <div className='home-container'>
      <h2>We are passionate about helping animals find their forever homes</h2>
      <div className='pet-card'>
        <div className='cat-link'>
          <Link to={'./cats'}>
            <p>Adopt a Cat</p>
            <img src={'../../../images/cat.jpg.jpg'} alt='adopt-cat'/>
          </Link>
        </div>
        <div className='dog-link'>
          <Link to={'./dogs'}>
            <p>Adopt a Dog</p>
            <img src={'../../../images/dog.jpg.jpg'} alt='adopt-dog'/>
          </Link>
        </div>
      </div>
      <div>
        <button className='fact-btn' onClick={showFact}>Click for a random cat fact!</button>
        <p id='fact'>{fact}</p> 
      </div>
    </div>
  )
}