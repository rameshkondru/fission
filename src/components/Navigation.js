import React from "react";
import {a} from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className="head">         
        <a aria-current="true" href="/">Login</a>
        <a aria-current="false" href="/register">Register</a>
        <a aria-current="false" href="/user">User</a>
    </div>
  );
};

export default Navigation;