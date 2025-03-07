import styled from 'styled-components';
import ProjectEntries from './types/ProjectEntries.tsx';
import Calculator from './Calculator.tsx';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    padding: 1vh 1vw;
`

export default function Project() {
    return (
      <StyledDiv>
        <h2>Projects</h2>
          <ProjectEntries
            title="Tetris Neural Network Agent"
            role="Machine Learning Engineer"
            date="November 2024 - December 2024"
            details= "Developed a reinforcement learning agent for Tetris by implementing key components such as state-action representation, reward engineering, and neural network-based Q-value prediction. Designed a training pipeline leveraging temporal difference (TD) learning with replay buffers to aggregate transitions and mitigate overfitting. Conducted iterative cycles of training, evaluation, and performance improvement, leading to a highly proficient agent."
          />
          <ProjectEntries
            title="Custom Motion Sensor Light"
            role="Software/Mechanical Engineer"
            date="May 2023 - August 2023"
            details="Designed and set up a custom motion sensor lighting system using Arduino and ESP32 Nano boards, integrating photoresistors and ultrasonic range modules. Configured system to operate for 12 hours daily (6AM - 6PM), optimizing energy efficiency and ensuring evening illumination. Engineered sensors to measure ambient light levels and detect objects within a 10-foot radius, enhancing environmental awareness and automated lighting control."
          />

        <Calculator />
      </StyledDiv>
    );
  }