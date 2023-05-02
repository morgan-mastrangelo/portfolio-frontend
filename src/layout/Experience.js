import React, {useState} from "react";
import "../styles/experience.css";
import ExperiencePart from "../components/ExperiencePart";
import {InView} from "react-intersection-observer";
import {Fade} from "react-reveal";

const data = [
  {
    date: '2016 - 2018',
    position: 'Software Programmer',
    desc: [
      "Built several desktop applications with C/C++, QML, and mobile applications with Java.",
      "Designed a search feature for an open-source visual programming tool to help users better navigate the system."
    ]
  },
  {
    date: '2018 - 2019',
    position: 'Web Designer',
    desc: [
      "Designed Company Logo, Portfolio Blog, etc.",
      "Created high-quality and visually-appealing websites for small and medium-sized businesses according to their specific needs."
    ]
  },
  {
    date: '2019 - 2020',
    position: 'Frontend Web Developer',
    desc: [
      "Used Javascript, HTML, and CSS to develop web applications for various industries.",
      "Developed a booking application using React, Next.js, and Node.js to let users book a service online and get real-time updates on their progress.",
      "Followed a Kanban-style workflow using Trello boards",
      "Created a mobile responsive web design for an online store that gets 65% of its traffic from mobiles",
      'Worked with back-end developers, front-end developers, and full-stack developers to achieve client objectives.'
    ]
  },
  {
    date: '2020 - 2022',
    position: 'Senior Frontend Developer',
    desc: [
      "Taught 7 junior front-end developers and utilized their technical skills to achieve the organization’s objectives.",
      "Developed a web interface using Vue to perform CRUD operations on tasks with large files, driving up the performance of a workflow pipeline by 60%.",
      "Designed a credit payment system with premium plans and integrated the application with Stripe API using Node.js to accept online payments",
      "•Converted given wireframes into Vue components and designed a mobile-friendly UI to provide a better user experience across multiple devices"
    ]
  },
  {
    date: '2023 - Present',
    position: 'Software Engineer',
    desc: [
      "Collaborated and managed teams in web application development, such as E-commerce, and social websites",
      "Developed and maintained web applications using Django, AngularJS, and MySQL.",
      "Assisted with the deployment process using Docker and AWS services."
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
              desc={exp.desc}
            />
          )
        }
      </div>
    </InView>
  );
}

export default Experience;