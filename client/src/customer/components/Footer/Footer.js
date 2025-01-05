import React from 'react'
import './Footer.css'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Footer = () => {
  return (
    <div className='footer bg-black text-white'>
      <div className="grid-section">
        <div className="footer-content">
          <h4>Company</h4>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Partners</a></li>
        </div>
        <div className="footer-content">
          <h4>Solutions</h4>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Analysis</a></li>
          <li><a href="#">Commerce</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Support</a></li>
        </div>
        <div className="footer-content">
          <h4>Documentation</h4>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Api</a></li>
          {/* <li><a href="#">Jobs</a></li> */}
          {/* <li><a href="#">Press</a></li> */}
          {/* <li><a href="#">Partners</a></li> */}
        </div>
        <div className="footer-content">
          <h4>Legal</h4>
          <li><a href="#">Claim</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          {/* <li><a href="#">Press</a></li> */}
          {/* <li><a href="#">Partners</a></li> */}
        </div>
      </div>

      <div className="copyright">
        <p><CopyrightOutlinedIcon/> 2024 My Company. All Rights Reserved</p>
        <p>Made with love by me</p>
        <p>Icons Made by freepik from www.freepik.com</p>
      </div>
    </div>
  )
}

export default Footer
