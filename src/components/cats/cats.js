import React from "react";
import './cats.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCats } from "./catsSlice";

export default function Cats() {
  
  const cats = useSelector(selectCats);

  return(
    <div>
      <h2>Cats</h2>
      <div className='cats-container'>
        {
          cats?.map((cat) => {
            return <Link to={`/cats/${cat.name}`} id='cat-container' key={cat.id}>
              <h3 className='cat-label'>{cat.name}</h3>
              <img src={(`../../../images/${cat.image}.jpg`)} loading='lazy' alt={cat.name}/>
            </Link>
          })
        }
      </div>
    </div>
  )
}