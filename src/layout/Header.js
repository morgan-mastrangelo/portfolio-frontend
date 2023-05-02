import React from "react";
import '../styles/header.css';
import Carousel from "../components/Carousel";

function Header() {
    return (
        <div className="slider" id={'home'}>
            <div style={{background: "url(assets/images/cover-day.jpg) center"}} className={"slide-day"}></div>
            <div style={{background: "url(assets/images/cover-night.jpg) center"}} className="slide-night"></div>

            <span className={'slide-title'}>
                <h1>
                    <span>MORGAN</span>
                    <span>MASTRANGELO</span>
                </h1>
                <hr />
                <Carousel />
            </span>
        </div>
    )
}

export default Header;