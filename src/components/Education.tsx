import styled from 'styled-components';
import EducationEntries from './types/EducationEntries';
import Beaver from '../assets/beaver.jpg';
import South from '../assets/ns.png';
import Boston from '../assets/bu.png';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    width: 100%;
`

export default function Education() {
    return (
        <StyledDiv>
            <h2>Education</h2>
            <EducationEntries school="Beaver Country Day School" date="September 2014 - June 2017" image={Beaver} altText="Image of Beaver Country Day School"/>
            <EducationEntries school="Newton South High School" date="September 2017 - June 2021" image={South} altText="Image of Newton South High School"/>
            <EducationEntries school="Boston University" date="September 2021 - Present" image={Boston} altText="Image of Boston University"/>
        </StyledDiv>
    );
  }