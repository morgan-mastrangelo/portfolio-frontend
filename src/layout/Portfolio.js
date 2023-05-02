import React, {useState} from "react";
import '../styles/portfolio.css';
import {Col, Row} from "antd";
import PortfolioCard from "../components/PortfolioCard";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from 'react-reveal';

const data = [
  {
    url: 'assets/images/portfolio/1.png',
    title: 'SatyaDev Urology',
    desc: 'This is the hospital site.',
    link: 'https://satyadevurology.vercel.app/'
  },
  {
    url: 'assets/images/portfolio/2.png',
    title: 'Altura NFT',
    desc: 'This is game site.',
    link: 'https://www.alturanft.com/'
  },
  {
    url: 'assets/images/portfolio/3.png',
    title: 'GetCollective',
    desc: 'This is the site.',
    link: 'https://www.getcollective.com/en/'
  }
]

function Portfolio() {
  const [show, setShow] = useState(false);

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={'portfolio-section'} id={'portfolio'}>
        {
          <h1>
            {
              show && (
                <Bounce top cascade>
                  PORTFOLIO
                </Bounce>
              )
            }
          </h1>
        }
        <Row>
          {
            data.map((list, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <Fade bottom delay={index * 300} when={show}>
                        <PortfolioCard
                          img={list.url}
                          title={list.title}
                          desc={list.desc}
                          link={list.link}
                        />
                    </Fade>
              </Col>
            ))
          }
        </Row>
      </div>
    </InView>
  )
}

export default Portfolio;