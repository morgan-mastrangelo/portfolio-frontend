import React from 'react';
import {css} from '@emotion/css';

function DoorEffect() {
    const container = css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      animation: door_disappear 1s forwards;
      
      @keyframes door_disappear {
        0%,99% { visibility: visible }
        100% { visibility: hidden }
      }
    `;

    const door1 = css`
      position: absolute;
      top: 0;
      right: 51%;
      width: 100%;
      height: 100vh;
      background: white;
      transform: skewX(-15deg);
      animation: door_anim1 1s forwards;
      
      @keyframes door_anim1 {
        from { transform: skewX(-15deg) }
        to { transform: skewX(-15deg) translateX(-100%) }
      }
    `

    const door2 = css`
      position: absolute;
      top: 0;
      left: 51%;
      width: 100%;
      height: 100vh;
      background: white;
      transform: skewX(-15deg);
      animation: door_anim2 1s forwards;

      @keyframes door_anim2 {
        from { transform: skewX(-15deg) }
        to { transform: skewX(-15deg) translateX(100%) }
      }
    `

    return (
        <div className={container}>
            <span className={door1} />
            <span className={door2} />
        </div>
    )
}

export default DoorEffect;