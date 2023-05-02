import React from 'react';
import {css} from "@emotion/css";

function Button(props) {
    const { width, height, children } = props;

    const button = css`
      width: ${width};
      height: ${height};
      font-size: 20px;
      font-weight: bold;
      min-width: 300px;
      border: none;
      outline: none;
      border-radius: 4px;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
      background: linear-gradient(135deg, rgb(181, 143, 255), rgb(163, 71, 245));
      backdrop-filter: blur(12px);
      color: white;
      transition: all .3s;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-6px);
      }
    `

    return (
        <button className={button}>
            {children}
        </button>
    )
}

export default Button;