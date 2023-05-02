import React, {useState} from "react";
import {css} from "@emotion/css";
import {Col, Row} from "antd";
import {InView} from "react-intersection-observer";

function ExperiencePart(props) {
  const {date, position, desc} = props;
  const [show, setShow] = useState(false);

  const line = css`
    position: relative;
    height: 50vh;
    margin-left: 10vw;
    border-radius: 50%;

    & span:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border: 2px solid white;
      border-radius: 50%;
      background: rgb(26, 45, 62);
      transform: translate(-50%, -50%);
      animation: line_anim1 .5s;
      z-index: 1;

      @keyframes line_anim1 {
        0% {
          transform: translate(-50%, -50%) scale(0)
        }
        40% {
          transform: translate(-50%, -50%) scale(1.2)
        }
        100% {
          transform: translate(-50%, -50%) scale(1)
        }
      }
    }

    & span:nth-child(2) {
      position: absolute;
      width: 2px;
      height: 0;
      background: linear-gradient(to bottom, white, transparent);
      transform: translateX(-50%);
      animation: line_anim2 1s .5s forwards;

      @keyframes line_anim2 {
        0% {
          height: 0
        }
        100% {
          height: 100%
        }
      }
    }
  `;

  const content = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 45vh;
    font-family: Arial, serif;
    color: white;
    opacity: 0;
    animation: fade_left 1s 1.5s forwards;

    & h1 {
      font-size: 32px;
      margin: 12px 0;
    }

    & span {
      font-size: 16px;
      margin-bottom: 20px;
    }

    & p {
      font-size: 18px;
      margin: 8px 0;
    }

    @keyframes fade_left {
      from {
        transform: translateX(-50px);
        opacity: 0
      }
      to {
        transform: translateX(0);
        opacity: 1
      }
    }
  `;

  return (
    <InView onChange={inView => setShow(inView)}>
      <Row>
        <Col xs={0} sm={4} md={6}>
          {
              <div className={line}>
                {show && <span/>}
                {show && <span/>}
              </div>
          }
        </Col>

        <Col xs={24} sm={20} md={18}>
          {
            show && (
              <div className={content}>
                <h1>{position}</h1>
                <span>{date}</span>
                {
                  desc.map((text, index) =>
                    <p key={index}>• {text}</p>
                  )
                }
              </div>
            )
          }
        </Col>
      </Row>
    </InView>
  )
}

export default ExperiencePart;