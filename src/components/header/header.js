import React from "react";
import Navigation from "../navigation/navigation";
import Banner from "../banner/banner";
import './header.css'

export default function Header() {
  return(
    <section className='header'>
      <Banner/>
      <Navigation/>
    </section>
  )
}