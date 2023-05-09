import React from 'react';
import {css} from "@emotion/css";
import {LinkOutlined} from "@ant-design/icons";

function PortfolioCard(props) {
  const {img, title, desc, link} = props;

  const container = css`
    display: flex;
    height: 320px;
    margin: 8px;
    perspective: 1000px;

    &:hover div {
      transform: rotateY(-180deg);
    }
  `;

  const containerInner = css`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
    transition: all .5s;
  `

  const front = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${img});
    background-size: cover;
    backface-visibility: hidden;

  `;

  const back = css`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgb(26, 45, 62);
    color: white;
    backface-visibility: hidden;
    transform: rotateY(-180deg);

    & h1 {
      font-family: Arial, serif;
      font-size: 32px;
      margin: 0;
    }

    & a {
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 56px;
      height: 56px;
      margin: 20px;
      border: 1px solid white;
      border-radius: 50%;
      color: white;
      transition: all .3s;

      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
      }
    }
    
    & p {
      padding: 16px;
    }
  `;

  return (
    <div className={container}>
      <div className={containerInner}>
        <span className={front}/>
        <span className={back}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={link} target={'_blank'} title={'Page Link'} rel="noreferrer">{<LinkOutlined/>}</a>
        </span>
      </div>
    </div>
  )
}

export default PortfolioCard;