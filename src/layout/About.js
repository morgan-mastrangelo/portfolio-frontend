import React, {useState} from 'react';
import {InView} from "react-intersection-observer";
import {Col, Row} from "antd";
import '../styles/about.css';
import { Zoom, Fade, Bounce } from 'react-reveal';
import Button from "../components/Button";
import {FolderOpenOutlined} from "@ant-design/icons";

function About() {
    const [show, setShow] = useState(false);

    return (
        <InView onChange={(inView) => setShow(inView)}>
            <div className={'about-section'} id={'about'}>
                <Row style={{width:'100%',height:'100%'}}>
                    <Col xs={12} sm={8}>
                        {
                            show && (
                                <div className={'about-shape-container'}>
                                    <Zoom duration={1000}><span /></Zoom>
                                    <Zoom duration={1000} delay={300}><span /></Zoom>
                                </div>
                            )
                        }
                    </Col>

                    <Col sm={16} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {
                            show && (
                                <Fade delay={700}>
                                    <div className={'about-description'}>
                                        My name is Morgan Mastrangelo.<br />
                                        I'm a web developer specializing in front-end development and web design with 7 years of relevant experience.
                                        I also have an experience in back-end, database management, as well as mobile app development under my belt.
                                    </div>
                                </Fade>
                            )
                        }

                        {
                            show && (
                                <Bounce duration={500} delay={1000}>
                                    <a href={'assets/resume/Morgan_Mastrangelo_Resume.pdf'} download>
                                        <Button
                                            width={'20vw'}
                                            height={'60px'}
                                        >
                                            <FolderOpenOutlined /> Download Resume
                                        </Button>
                                    </a>
                                </Bounce>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </InView>
    )
}

export default About;