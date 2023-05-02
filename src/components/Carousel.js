import React from "react";

function Carousel(props) {

    return (
        <div className={'carousel'} {...props}>
            I'm a&nbsp;
            <div>
                <span><center></center></span>
                <span><center></center></span>
                <p>Software Engineer</p>
                <p>Fullstack Developer</p>
                <p>Web Designer</p>
            </div>
        </div>
    )
}

export default Carousel;