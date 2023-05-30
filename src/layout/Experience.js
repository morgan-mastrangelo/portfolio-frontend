import React, {useState} from "react";
import "../styles/experience.css";
import ExperiencePart from "../components/ExperiencePart";
import {InView} from "react-intersection-observer";
import {Fade} from "react-reveal";

const data = [
  {
    date: 'Aug 2016 - June 2017',
    position: 'Freelancer',
    company: 'Freelancer.com',
    desc: [
      "Developed a couple of desktop applications using C/C++ and QML, and several kinds of simple mobile apps using Java, and Android.",
      "Valued on project management expertise in front-end development.",
      "Developed statically typed routing API for React front-end."
    ]
  },
  {
    date: 'Aug 2017 - Nov 2018',
    position: 'Web Designer',
    company: 'Boston Consulting Group',
    desc: [
      "Designed Company Logo, page layout, mobile responsive, etc.",
      "Used Javascript, HTML, and CSS to build mobile responsive landing pages for various industries.",
      "Created high-quality and visually-appealing websites for small and medium-sized businesses according to their specific needs.",
      "Created a mobile responsive web design for an online store that gets 65% of its traffic from mobiles."
    ]
  },
  {
    date: 'Nov 2018 - Feb 2021',
    position: 'Frontend Web Developer',
    company: 'Uber Technologies',
    desc: [
      "Developed a booking application using React/Next.js, and Node.js/express to let users book a service online and get real-time updates on their progress.",
      "Implemented React Hooks to accelerate front-end rebuild by reducing code while maintaining backward compatibility.",
      "Implemented Redux to manage a large state, leverage predictable state updates through the use of dispatchers and reducers, and avoid unnecessary prop drilling to improve the maintainability and scalability of the front-end codebase.",
      "Built out PWA(Progressive Web App) for the B2C portal of Consumer eStore.",
      "Used various testing frameworks including Jest, Mocha, and Cypress to build more stable projects.",
      "Developed using React Native by leveraging its 'out-of-the-box' compiler to architect a responsive, scalable and cross-platform mobile application.",
      "Followed a Kanban-style workflow using Trello boards.",
      "Worked with back-end, front-end, and full-stack developers to achieve client objectives"
    ]
  },
  {
    date: 'Feb 2021 - Aug 2022',
    position: 'Backend Developer',
    company: 'Adams Consulting Group, LLC',
    desc: [
      "Developed and implemented code using ASP.NET.",
      "Used Web services like SOAP, and RESTful APIs for transmission of large blocks of XML and JSON.",
      "Assisted in resolving 85% of client technical issues through debugging and research.",
      "Built E-commerce, Social project backend using Java/Spring, Django, and Ruby on Rails.",
      "Specialized in online customer service features, including the live chat functionality maintaining database management like RDBMS."
    ]
  },
  {
    date: 'Aug 2022 - May 2023',
    position: 'Senior Frontend Developer',
    company: 'Pfizer',
    desc: [
      "Collaborated and managed team members in web app development in the E-commerce and healthcare fields.",
      "Reduced development time by 75% using Agile methodologies in Jira software for CI/CD pipelines in various healthcare projects.",
      "Converted given wireframes into Angular components and designed mobile-friendly User interfaces to provide better user experiences across multiple devices.",
      "Taught 7 junior front-end developers and utilized their technical skills to achieve the organization's objectives."
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