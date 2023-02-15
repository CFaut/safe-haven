import React, { useState } from "react";
import './cats.css';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectCats } from "./catsSlice";
import { Link } from "react-router-dom";

export default function IndividualCat(props) {
  const {catName} = useParams();
  const cats = useSelector(selectCats);
  const [isShowing, setShowing] = useState('false')

  const cat = cats.find(cats => cats.name === catName)
  console.log(cats)

  function toggleForm() {
    console.log('clicked')
    setShowing(!isShowing);
    
  }

  console.log(cat)
  return(
    <div className='cat-card'>
      <div className='card-display'>
        <img className='cat-picture' src={`../../../images/${cat.image}.jpg`} alt={cat.name}/>
        <div>
          <h3 className='cat-name'>{cat.name}</h3>
          <p>Age: {cat.age}</p>
          <p>{cat.gender}</p>
          <p>Discription wil go here</p>
          <button className='open-btn' onClick={toggleForm}>Enquire about adoption</button>
        </div>
      </div>

      <div className={isShowing? 'form-popup-none' : 'form-popup-display'} id='dogForm'>
        <form className='form-container'>
            <h1>Want to adopt {cat.name}?</h1>

            <p>Send us your details and we'll be in touch to discuss adoption</p>

            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Name" name="name" required/>

            <label for="last-name"><b>Last Name</b></label>
            <input type="text" placeholder="Last Name" name="last-name" required/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label for="tel"><b>Phone Number</b></label>
            <input type="tel" placeholder="Phone Number" name="tel" required/>

            <button type="submit" className="btn">Submit</button>
            <button type="button" className="btn cancel" onClick={toggleForm} >Close</button>
        </form>
      </div>
      <Link to={'/cats'} className="back-btn" >Go Back </Link>
    </div>
  )
}