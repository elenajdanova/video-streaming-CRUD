import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <i className="big film icon"></i>
        Streamy
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  )
};

export default Header;


//<Link to="/" className="item">
  //All streams
//</Link>
