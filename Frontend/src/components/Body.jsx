import React from "react";
import { NavLink } from "react-router-dom";
import trade from "../images/trade.svg";
import '../components/Body.css'

function Body() {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">



                                <div className="brand-name">
                                    <strong className="brand-name">Manthan DEX</strong>
                                </div>


                                <div className="mt-3 d-flex flex-row">

                                    <button>
                                        <NavLink
                                            to="/trade"
                                            className="btn-get-started mx-2 mb-3 btn-anim"
                                        >
                                            Trade Crypto
                                        </NavLink>
                                    </button>


                                    {/* <NavLink
                                        to="/signin"
                                        className="btn-get-started mx-2 mb-3 btn-anim"
                                    > */}
                                    <button>
                                        SIGN IN
                                    </button>
                                    {/* </NavLink> */}
                                </div>
                                {/* <div>
                  <NavLink
                    to="/about"
                    className="btn-get-started mx-2 mb-5 btn-anim-about-us"
                  >
                    ABOUT US
                  </NavLink>
                </div> */}
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img margin-custom d-flex justify-content-center floater-anim">
                                <img
                                    src={trade}
                                    className="img-fluid animated"
                                    alt=""
                                    id="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;