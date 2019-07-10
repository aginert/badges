import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HomePage.css';
import Astronauts from '../images/astronauts.svg';
import header from '../images/platziconf-logo.svg';

function Home () {
    
        return(
            <div className="Container-home">   
                <div className="d-none d-md-block col-md-4 col-lg-6 ImgAstro">
                    <img src={Astronauts} alt="AstronautasImg"/>
                </div>       
                <div className=" col-12 col-md-4 col-sm-2 InfoConf">
                    <img className="mb-2"src={header} alt="ConfPlatzi"/>
                    <h1>BADGE MANAGEMENT SYSTEM</h1>
                    <Link className="btn btn-primary mt-1" to="/badges"> Start </Link>
                </div>
            </div>
        );
    
}
export default Home;