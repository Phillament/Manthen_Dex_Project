import React from "react";
import './Section.css';
import { NavLink } from "react-router-dom";

function Section() {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mt-5 ">
                                    <button className="button_section">
                                        <NavLink to = "/buy">
                                        BUY
                                        </NavLink>
                                        
                                    </button>
                                

                                    
                                </div>

                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mt-5">
                                    <button className="button_section">
                                        <NavLink to ="/sell">
                                        SELL
                                        </NavLink>
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section;