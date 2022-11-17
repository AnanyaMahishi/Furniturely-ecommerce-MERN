import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return(
    
           
        
        <footer class="d-flex justify-content-center align-items-center py-3 my-5 border-top ">
            <div  class="col-md-5 d-flex align-items-center">
            <Link to="/" class="mb-4 me-1 mb-md-0 text-muted text-decoration-none lh-1">
                <img className="header_logo" src={require("./logo.jpeg")} alt=""/>
            </Link >
            <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
            </div>

            <ul id="foot" class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><Link class="text-muted" to="/"><TwitterIcon/></Link></li>
            <li class="ms-3"><Link class="text-muted" to="/"><InstagramIcon/> </Link></li>
            <li class="ms-3"><Link class="text-muted" to="/"><FacebookIcon/></Link></li>
            </ul>
        </footer>
     
      
    )
}
export default Footer