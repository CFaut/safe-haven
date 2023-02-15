import React from "react";
import './contactUs.css';

export default function ContactUs() {
  return(
    <div className='contact-container'>
      <div>
      <form className='contact-form-container'>
            <h1>Do you have a question?</h1>

            <p>Fill in the details below and we'll be in touch.</p>

            <input type="text" placeholder="Name" name="name" required/>

            <input type="text" placeholder="Last Name" name="last-name" required/>

            <input type="text" placeholder="Enter Email" name="email" required/>

            <input type="tel" placeholder="Phone Number" name="tel" required/>
            
              <div className='message-container'>
                <textarea placeholder="Leave a message here" name="message" rows='7' cols='30' required>
                </textarea>
              </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}