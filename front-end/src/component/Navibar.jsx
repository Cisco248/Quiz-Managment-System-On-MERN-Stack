import React from 'react';
import './Navibar.css'

export default function Navibar() {
  return (
    <div>
      <div className='navbar_box'>
        <img className='logo' src='./nav-logo.svg' alt="" />
        <div className='navibar_text'>
          <h1> <a href="" className='help'>Help<img src='./help.svg' alt="" /></a></h1>
          <h1> <a href="" className='contact_us'>Contact US<img src="./contact-us.svg" alt="" /></a></h1>
        </div>
      </div>
    </div>
  );
}
