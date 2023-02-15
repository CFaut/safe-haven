import React from "react";
import './footer.css'

export default function Footer() {
  return(
    <div className='footer-container'>
      <div className='details'>
        <ul>
          <li><i className="fa fa-solid fa-phone"></i> 087 658 2783</li>
          <li><i className="fa fa-solid fa-envelope"></i> safehaven@gmail.com</li>
          <li><i className="fa fa-solid fa-location-dot"></i> 47 Loop street, HollyTown, 7421</li>
        </ul>
      </div>
      <div className='social-media'>
        <ul>
          <li><i className="fa fa-brands fa-instagram"></i> Instagram</li>
          <li><i className="fa fa-brands fa-facebook"></i> Facebook</li>
          <li><i className="fa fa-brands fa-twitter"></i> Twitter</li>
        </ul>
      </div>
    </div>
  )
}