import React, { useState } from "react";
import './dogs.css';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDogs } from "./dogsSlice";
import { Link } from "react-router-dom";

export default function IndividualDog(props) {
  const {dogName} = useParams();
  const dogs = useSelector(selectDogs);
  const [isActive, setActive] = useState('false');

  const dog = dogs.find(dogs => dogs.name === dogName)


  function toggleForm() {
    console.log('clicked')
    setActive(!isActive);
    
  }

  return(
    <section className='dog-card'>
      <div className='card-display'>
        <img className='dog-picture' src={`../../../images/${dog.image}.jpg`} alt={dog.name}/>
      <div>
        <h3 className='dog-name'>{dog.name}</h3>
          <p>Age: {dog.age}</p>
          <p>{dog.gender}</p>
          <p>Discription wil go here</p>
          <button className='open-btn' onClick={toggleForm}>Enquire about adoption</button>
        </div>
      </div>
      
      <div className={isActive? 'form-popup-none' : 'form-popup-display'} id='dogForm'>
        <form className='form-container'>
            <h1>Want to adopt {dog.name}?</h1>

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
      <Link to={'/dogs'} className="back-btn" >Go Back </Link>
    </section>
  )


}