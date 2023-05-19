import React, {useState} from "react";
import '../styles/portfolio.css';
import {Col, Row} from "antd";
import PortfolioCard from "../components/PortfolioCard";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from 'react-reveal';

const data = [
  {
    url: 'assets/images/portfolio/1.png',
    title: 'Artios Pharma',
    desc: 'Leading DNA Damage Response (DDR) company focused on developing first-in-class treatments for cancer.',
    link: 'https://www.artiospharma.com'
  },
  {
    url: 'assets/images/portfolio/2.png',
    title: 'VectivBio',
    desc: 'A spin out of Therachon, that will focus on conditions caused by well understood molecular alterations that can be targeted with transformational therapeutics.',
    link: 'https://www.vectivbio.com'
  },
  {
    url: 'assets/images/portfolio/3.png',
    title: 'Overleaf',
    desc: 'A collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents.',
    link: 'https://www.overleaf.com'
  },
  {
    url: 'assets/images/portfolio/4.png',
    title: 'Uber Health',
    desc: 'web app to help improve health outcomes and the patient, caregiver, and clinician experience by helping enable better access to care and services.',
    link: 'https://www.uberhealth.com'
  },
  {
    url: 'assets/images/portfolio/5.png',
    title: 'Lyft',
    desc: 'platform let people order delivery or pickup from restaurants, retailers, grocers, and more all across the city.',
    link: 'https://www.lyft.com'
  },
  {
    url: 'assets/images/portfolio/6.png',
    title: 'Stantec',
    desc: 'website to help assisting their clients across the industry to shape and improve transitional and future energy projects.',
    link: 'https://www.stantec.com'
  },
  {
    url: 'assets/images/portfolio/7.png',
    title: 'Postmates',
    desc: 'platform available for delivery and pickup food, drinks, groceries.',
    link: 'https://postmates.com'
  },
  {
    url: 'assets/images/portfolio/8.png',
    title: 'Ryte',
    desc: 'Ryte and Boston Consulting Group teamed up to examine the most significant website problems and quantify their impact on overall digital marketing spend.',
    link: 'https://en.ryte.com'
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