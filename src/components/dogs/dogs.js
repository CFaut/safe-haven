import React from "react";
import './dogs.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDogs } from "./dogsSlice";

export default function Dogs() {
  const dogs = useSelector(selectDogs);

  // style={{backgroundImage: `url('../../../images/${dog.image}.jpg')`}}

  return(
    <div>
      <h2>Dogs</h2>
      <div className='dogs-container'>
        {
          dogs.map((dog) => {
            return <Link to={`/dogs/${dog.name}`} id='dog-container' key={dog.id}>
              <h3 className='dog-label' >{dog.name}</h3>
              <img src={(`../../../images/${dog.image}.jpg`)} alt={dog.name}/>
            </Link>
          })
        }
      </div>
    </div>
  )
}