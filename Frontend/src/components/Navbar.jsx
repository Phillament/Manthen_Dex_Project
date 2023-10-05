import React from "react";
import "../components/Body.css";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import '../components/Navbar.css';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png"

function Navbar() {
  return (
    <div className="pos-fix"  style={{width:"100%",display:"flex" ,flexDirection:"row"}}>
      {/* <nav className="navbar bg-body-tertiary "> */}
        {/* <div className="container-fluid"> */}
          <div className="navbar-brand mb-0 h1 title" style={{width:"40%"}}>
            <NavLink to="/dashboard">
              <img src={logo} alt="blockchain" className="logo" />
            </NavLink>
          </div>
          <div className="navbar-brand mb-0" style={{width:"50%"}}>
            <div style={{display:"flex" , flexDirection:"row"}}>
                <div className="div_inner">
                    Know More
                </div>
                <div className="div_inner">
                    Governance
                </div>
                <div className="div_inner">
                    Community
                </div>
                <div className="div_inner">
                    Developers
                </div>
                <div className="div_inner">
                    Neurons
                </div>
                <div className="div_inner">
                    <img src={icon1} alt="" />

                </div>
                <div className="div_inner">
                    <img src={icon2} alt="" />

                </div>
            </div>
          </div>
        {/* </div> */}
      {/* </nav> */}
    </div>
  );
}

export default Navbar;