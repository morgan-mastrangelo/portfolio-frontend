import React, {useState} from 'react';
import {css} from "@emotion/css";
import {Col, Input, Row} from "antd";
import Button from "../components/Button";
import '../styles/contact.css';
import TextArea from "antd/lib/input/TextArea";
import {SendOutlined} from "@ant-design/icons";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from "react-reveal";

function Contact() {
  const [show, setShow] = useState(false);

  const parallax = css`
    min-height: 512px;
    padding: 32px;
    background-color: rgba(0,0,0,0.5);
    background-image: url('/assets/images/contact-parallax.jpg');
    background-size: cover;
    background-blend-mode: darken;
  `;

  const title1 = css`
    font-family: Arial, serif;
    font-size: 8vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    color: white;
  `;

  const title2 = css`
    font-family: Arial, serif;
    font-size: 8vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding-top: 20px;
    text-align: center;
    color: white;
  `;

  const form = css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  `

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={parallax} id={'contact'}>
        <Col xs={24} sm={24} md={0} lg={0}>
          {
            show && (
              <Bounce>
                <h1 className={title2}>Contact Me</h1>
              </Bounce>
            )
          }
        </Col>

        <Row style={{minHeight:512}}>
          <Col xs={0} sm={0} md={8} lg={12}>
            {
              show && (
                <Bounce>
                  <h1 className={title1}>Contact Me</h1>
                </Bounce>
              )
            }
          </Col>

          <Col xs={24} sm={24} md={16} lg={12}>
            {
              show && (
                <Fade delay={300}>
                  <form className={form}>
                    <Input name={'name'} placeholder={'Full Name'} rootClassName={'contact-input'}  />
                    <Input name={'email'} placeholder={'Email'} rootClassName={'contact-input'} />
                    <TextArea name={'text'} placeholder={'Type here...'} className={'contact-textarea'} />

                    <Button
                      width={'10vw'}
                      height={'60px'}
                    >
                      <SendOutlined /> SEND
                    </Button>
                  </form>
                </Fade>
              )
            }
          </Col>
        </Row>
      </div>
    </InView>
  )
}

export default Contact;