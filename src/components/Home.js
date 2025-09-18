import React, { Fragment, useState, useEffect } from "react";
import {Link} from "react-router-dom";

import Navbar from "./Navbar";

import "./css/home.css";

export default function Home() {
  console.log("Home");


  return (
    <Fragment>
      <div className="home-container">
        <Navbar />
      </div>     
    </Fragment>
  );
}



