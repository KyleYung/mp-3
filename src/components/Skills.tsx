import styled from 'styled-components';
import SkillsEntries from './types/SkillsEntries';
import Python from '../assets/python.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.jpg';
import JS from '../assets/js.png';
import C from '../assets/c.jpg';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    width: 100%;
`

export default function Skills() {
    return (
        <StyledDiv>
            <h2>Skills</h2>
            <SkillsEntries title="Python" image={Python} altText="Image of Python Logo"/>
            <SkillsEntries title="HTML" image={HTML} altText="Image of HTML Logo"/>
            <SkillsEntries title="CSS" image={CSS} altText="Image of CSS Logo"/>
            <SkillsEntries title="Javascript" image={JS} altText="Image of Javascript Logo"/>
            <SkillsEntries title="C++" image={C} altText="Image of C++ Logo"/>
        </StyledDiv>
    );
  }