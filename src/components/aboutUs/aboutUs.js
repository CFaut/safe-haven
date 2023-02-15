import React from "react";
import './aboutUs.css';

export default function AboutUs() {
  return(
    <div className='about-section'>
      <h2>About Us</h2>
      <div className='about-text'>
      <p>We are an organisation that is passionate about finding animals their forever homes.
        We are a non-profit organisation that strives for the best quality of service to both you and our residents.
      </p>
      <p>
        SafeHaven was founded in 2003 by Lisa and James Bowers. They first started their journey as foster parents and realised that they wanted to do more for the cats and dogs of Cape Town. It started with just the two of them and has grown to a family of over 20 staffmembers! 
        Our staffmembers are also passionate about rescuing and taking care of animals.
      </p>
      <p>All of our furry friends are chipped, sterilised and vaccinated upon arrival, and any medical needs are seen to by our local vet. Our dogs are taken on daily walks and have a designated play time and our cats have a residence full of entertainment and big enough for them to get out all their energy. Our animals also eat premium quality food and always have access to fresh water.</p>
      </div>
      <div className='about-images'>
        <img src={(`../../../images/about-dog1.jpg`)} loading='lazy' alt='dog-1'/>
        <img src={(`../../../images/about-cat.jpg`)} loading='lazy' alt='about-cat'/>
        <img src={(`../../../images/about-dog2.jpg`)} loading='lazy' alt='dog-2'/>
      </div>
    </div>
  )
}