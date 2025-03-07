import styled from 'styled-components';
import CertificationEntries from './types/CertificationEntries.tsx';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    padding: 1vh 1vw;
`

export default function Certifications() {
    return (
      <StyledDiv>
        <h2>Certifications</h2>
          <CertificationEntries
            title="Designing and Implementing Microsoft DevOps Solutions"
            date="Issued May 2023"
            details= "Deliver Microsoft DevOps solutions that provide continuous security, integration, testing, delivery, deployment, monitoring, and feedback. Design and implement flow of work, collaboration, communication, source control, and automation"
          />
          <CertificationEntries
            title="Career Essentials in Generative AI by Microsoft and LinkedIn"
            date="Issued July 2023"
            details="Gained comprehensive knowledge of generative AI, including foundational concepts, applications, and ethical considerations. Acquired proficiency in prompt engineering, AI model integration, and workflow automation for real-world applications."
          />
          <CertificationEntries
            title="Azure Fundamentals"
            date="Issued August 2024"
            details= "Demonstrated foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools."
          />
      </StyledDiv>
    );
  }