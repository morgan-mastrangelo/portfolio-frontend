import React, {useState} from "react";
import '../styles/portfolio.css';
import {Col, Row} from "antd";
import PortfolioCard from "../components/PortfolioCard";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from 'react-reveal';

const data = [
  {
    url: 'assets/images/portfolio/1.png',
    title: 'Portfolio',
    desc: 'My Portfolio Website',
    link: 'https://morgan-mastrangelo.github.io/'
  },
  {
    url: 'assets/images/portfolio/2.png',
    title: 'Pfizer',
    desc: 'Medical Information Website for Pfizer',
    link: 'https://www.pfizermedicalinformation.com'
  },
  {
    url: 'assets/images/portfolio/3.png',
    title: 'SatyaDev Urology',
    desc: 'A Kidney Stone and Laparoscopy Hospital in Patna Satyadev Urology',
    link: 'https://satyadevurology.vercel.app/'
  },
  {
    url: 'assets/images/portfolio/4.png',
    title: 'Go Social',
    desc: 'Discover communities of favourite creators',
    link: 'https://krrish105.github.io/GoSocial-Landing-Page/'
  },
  {
    url: 'assets/images/portfolio/5.png',
    title: 'GetCollective',
    desc: 'Benefit from the first collaborative workflow management platform',
    link: 'https://www.getcollective.com/en/'
  },
  {
    url: 'assets/images/portfolio/6.png',
    title: 'Altura NFT',
    desc: 'Create, update, and transfer NFTs in-game without technical complexity or costly investment',
    link: 'https://www.alturanft.com/'
  },
  {
    url: 'assets/images/portfolio/7.png',
    title: 'Easybank',
    desc: 'Next generation digital banking website',
    link: 'https://easy-bank-gold.vercel.app/'
  },
  {
    url: 'assets/images/portfolio/8.png',
    title: 'Arley Bakery',
    desc: 'Bakery Marketing website',
    link: 'https://bakeshop-3.vercel.app/'
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