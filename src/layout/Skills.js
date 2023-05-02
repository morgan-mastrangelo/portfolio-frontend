import React, {useState} from 'react';
import {Col, Row} from "antd";
import '../styles/skills.css';
import SkillCard from "../components/SkillCard";
import {Slide, Zoom} from 'react-reveal';
import Image from "../components/Image";
import {InView} from "react-intersection-observer";

const data = {
  frontEnd: ['react', 'vue', 'vite', 'angular', 'svelte', 'redux', 'nextjs', 'nuxtjs', 'jquery', 'gatsby', 'wordpress', 'aws', 'regex'],
  backEnd: ['nodejs', 'expressjs', 'php', 'laravel', 'ruby', 'django', 'spring', 'flask', 'mysql', 'mongodb', 'postgres', 'sqlite', 'prisma', 'redis'],
  languages: ['c', 'cs', 'cpp', 'html', 'css', 'js', 'ts', 'py', 'java', 'swift', 'matlab', 'rust', 'go', 'kotlin', 'scala', 'perl'],
  design: ['bootstrap', 'materialui', 'sass', 'svg', 'tailwind', 'windicss', 'ae', 'ps', 'unity']
}

function Skills() {
  const [show, setShow] = useState(false);

  return (
    <InView onChange={(inView) => inView ? setShow(true) : setShow(false)}>
      <div className={'skill-section'} id={'skills'}>
        {
          show && (
            <h1>
              <Zoom right cascade>
                MY SKILLS
              </Zoom>
            </h1>
          )
        }

        <Row style={{display: 'flex'}}>
          <Col xs={24} md={12}>
            <Slide left when={show}>
              <SkillCard color={'#4caf50'}>
                <h1>Front-End Development</h1>
                {
                  data.frontEnd.map((list, index) => (
                    <Image key={index} alt={'skill'} src={`https://skillicons.dev/icons?i=${list}`}/>
                  ))
                }
              </SkillCard>
            </Slide>
          </Col>

          <Col xs={24} md={12}>
            <Slide right delay={300} when={show}>
              <SkillCard color={'dodgerblue'}>
                <h1>Back-End Development</h1>
                {
                  data.backEnd.map((list, index) => (
                    <Image key={index} alt={'skill'} src={`https://skillicons.dev/icons?i=${list}`}/>
                  ))
                }
              </SkillCard>
            </Slide>
          </Col>

          <Col xs={24} md={12}>
            <Slide left when={show}>
              <SkillCard color={'red'}>
                <h1>Programming Languages</h1>
                {
                  data.languages.map((list, index) => (
                    <Image key={index} alt={'skill'} src={`https://skillicons.dev/icons?i=${list}`}/>
                  ))
                }
              </SkillCard>
            </Slide>
          </Col>

          <Col xs={24} md={12}>
            <Slide right delay={300} when={show}>
              <SkillCard color={'orange'}>
                <h1>UX/UI Design</h1>
                {
                  data.design.map((list, index) => (
                    <Image key={index} alt={'skill'} src={`https://skillicons.dev/icons?i=${list}`}/>
                  ))
                }
              </SkillCard>
            </Slide>
          </Col>
        </Row>
      </div>
    </InView>
  )
}

export default Skills;