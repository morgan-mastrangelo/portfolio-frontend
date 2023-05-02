import React from 'react';
import {css} from "@emotion/css";

function SkillCard(props) {
    const { color } = props;

    const style = css`
      margin: 8px;
      padding: 32px;
      // border: 2px solid ${color};
      border-radius: 4px;
      
      & h1 {
        font-family: Arial, serif;
        min-font-size: 24px;
        margin-bottom: 32px;
        color: ${color};
      }
      
      & img {
        height: 12vmin;
        margin: 4px;
      }
    `;

    return (
        <div className={style}>
            { props.children }
        </div>
    );
}

export default SkillCard;