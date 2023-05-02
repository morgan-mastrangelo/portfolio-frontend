import React, {useEffect, useState} from "react";
import '../styles/navbar.css';
import {Slide} from "react-reveal";

function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollHeight(window.pageYOffset));
    if (scrollHeight > window.innerHeight / 3) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollHeight]);

  return (
    <div>
      <Slide duration={500} top when={isScrolled}>
        <div className={'navbar-scrolled'}>
          <img width={24} src={'logo-light.png'} alt={'logo'} />
          <div>
            <a href={'#home'}>HOME</a>
            <a href={'#about'}>ABOUT</a>
            <a href={'#skills'}>SKILLS</a>
            <a href={'#portfolio'}>PORTFOLIO</a>
            <a href={'#experience'}>EXPERIENCE</a>
            <a href={'#contact'}>CONTACT</a>
          </div>
        </div>
      </Slide>

      <div className={'navbar'}>
        <img width={24} src={'logo-light.png'} alt={'logo'} />
        <div>
          <a href={'#home'}>HOME</a>
          <a href={'#about'}>ABOUT</a>
          <a href={'#skills'}>SKILLS</a>
          <a href={'#portfolio'}>PORTFOLIO</a>
          <a href={'#experience'}>EXPERIENCE</a>
          <a href={'#contact'}>CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;