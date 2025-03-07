import styled from 'styled-components';
import ExperienceEntries from './types/ExperienceEntries.tsx';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    padding: 1vh 1vw;
`

export default function Experience() {
    return (
      <StyledDiv>
        <h2>Professional Experience</h2>
          <ExperienceEntries
            job="Rodman Ford"
            role="IT Intern"
            date="May 2024 - August 2024"
            details= "Served as only IT staff member, provided technical support to 100+ staff and employees. Handled server administration tasks such as monitoring, updating, troubleshooting, and installations of new server systems to ensure optimal performance and security. Implemented and monitored IT policies and procedures to ensure smooth operations."
          />
          <ExperienceEntries
            job="Rodman Ford"
            role="Software Engineer Intern"
            date="May 2022 - August 2022"
            details="Spearheaded creation and implementation of an intranet for 100+ employees to better share information and tools. Utilized a combination of HTML, CSS, JavaScript, and React to allow dynamic and interactive user experiences. Implemented Apache server hosting to deploy and manage web applications, ensuring reliable and efficient performance."
          />
          <ExperienceEntries
            job="Beaver Country Day School"
            role="IT Intern"
            date="March 2021 - June 2021"
            details= "Offered assistance to 700+ students and faculty with technology-related issues. Engaged in documentation projects to support the use of both basic and advanced tools, enhancing academic experience."
          />
      </StyledDiv>
    );
  }