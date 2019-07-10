import React from 'react';
import { Link } from 'react-router-dom';

import './styles/PageError.css';
import ErrorImg from '../images/error.png';

function PageError (props) {
    return <div className="PageError">
        <img className="ErrorImg" src={ErrorImg} alt="ErrorImage" />
        <p> {props.error.message}  </p>
        <Link className="btn btn-primary" to="/">Try back!</Link>
    </div>

}
export default PageError;