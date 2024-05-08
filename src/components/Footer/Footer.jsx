import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import './footer.css'
import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' py-8  px-[4%] max-w-screen-lg my-0 mx-auto'>
      <div className=' flex gap-5 my-10 mx-0'>
        <YouTube />
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
      <ul className=' grid md:grid-auto gap-5 md:gap-4 mb-8 list-none grid-cols-2 text-[13px] '>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Investor Relations</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className=' text-gray-300  text-xs'> &copy; 1997-{currentYear} NetTrail, inc</p>
    </div>
  )
}

export default Footer;