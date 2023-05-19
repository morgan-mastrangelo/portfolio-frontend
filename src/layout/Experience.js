import React, {useState} from "react";
import "../styles/experience.css";
import ExperiencePart from "../components/ExperiencePart";
import {InView} from "react-intersection-observer";
import {Fade} from "react-reveal";

const data = [
  {
    date: '2016 - 2017',
    position: 'Freelancer',
    company: 'Freelancer.com',
    desc: [
      "Built several desktop applications with C/C++, QML, and mobile applications using Java.",
      "Designed a search feature for an open-source visual programming tool to help users better navigate the system.",
      "Valued on project management expertising front-end development."
    ]
  },
  {
    date: '2017 - 2018',
    position: 'Web Designer',
    company: 'Boston Consulting Group',
    desc: [
      "Designed Company Logo, Portfolio Blog, etc.",
      "Created high-quality and visually-appealing websites for small and medium-sized businesses according to their specific needs."
    ]
  },
  {
    date: '2018 - 2021',
    position: 'Frontend Web Developer',
    company: 'Uber Technologies',
    desc: [
      "Used Javascript, HTML, and CSS to develop web applications for various industries.",
      "Developed a booking application using React, Next.js, and Node.js to let users book a service online and get real-time updates on their progress.",
      "Developed a web interface using Vue to perform CRUD operations on tasks with large files, driving up the performance of a workflow pipeline by 60%.",
      "Created a mobile responsive web design for an online store that gets 65% of its traffic from mobiles.",
      "Developed and maintained web applications using Django, AngularJS, and MySQL.",
      "Followed a Kanban-style workflow using Trello boards.",
      'Worked with back-end developers, front-end developers, and full-stack developers to achieve client objectives.'
    ]
  },
  {
    date: '2021 - 2022',
    position: 'Backend Developer',
    company: 'Adams Consulting Group, LLC',
    desc: [
      "Assisted in resolving 85% of client technical issues through debugging and research.",
      "Built e-commerce backend using Java and Spring framework.",
      "Specialized in online customer service features, including the live chat functionality.",
      "Developed and implemented code using .NET and SQL server."
    ]
  },
  {
    date: '2022 - 2023',
    position: 'Senior Frontend Developer',
    company: 'Pfizer',
    desc: [
      "Taught 7 junior front-end developers and utilized their technical skills to achieve the organization’s objectives.",
      "Converted given wireframes into Vue components and designed a mobile-friendly UI to provide a better user experience across multiple devices.",
      "Collaborated and managed teams in web application development, such as E-commerce, and social websites.",
      "Improved the home page views from 1.5K to 150K weekly through SEO optimization, A/B testing, and conversion rate optimization.",
      "Reduced development time by 75% through code reuse in JQuery libraries for various projects with over 5.4K combined page visits."
    ]
  }
];

function Experience() {
  const [show, setShow] = useState(false);

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={'experience-section'} id={'experience'}>
        <h1>
          {
            show && (
              <Fade right cascade>
                EXPERIENCE
              </Fade>
            )
          }
        </h1>

        {
          data.map((exp, index) =>
            <ExperiencePart
              key={index}
              date={exp.date}
              position={exp.position}
              company={exp.company}
              desc={exp.desc}
            />
          )
        }
      </div>
    </InView>
  );
}

export default Experience;