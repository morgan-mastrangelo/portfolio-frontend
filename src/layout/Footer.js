import React from "react";
import '../styles/footer.css';

function Footer() {
    return (
        <div className={'footer'}>
            <p>@copyright 2023, made by Morgan.M</p>
            <div>
                <a href={'https://github.com/morgan-mastrangelo'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=github" />
                </a>
                <a href={'https://www.linkedin.com/in/morgan-mastrangelo-243ba0272'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;