import styled from 'styled-components';
import HomeImg from "../assets/IMG_5405.png";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    width: 100%;
    height: 100%;
`

const HomeContentDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledImg = styled.img`
    max-width: 40%;
    object-fit: contain;
    padding: 2%;
`

const StyledH1 = styled.h1`
    font-size: calc(5px + 5vh);
    padding: 2%;
    color: black;
`

const StyledP = styled.p`
    font-size: calc(5px + 2vh);
    padding: 2%;
    color: black;
`

export default function About() {
    return (
        <StyledDiv>
            <StyledH1>Home</StyledH1>
            <HomeContentDiv>
                <StyledImg src={HomeImg} alt="Image of Me"/>
                <StyledP>My name is Kyle Yung, I am currently a senior at Boston University studying Computer Science. I have experience as both a Software Engineer and an IT Technician. Outside of Computer Science, I enjoy traveling, drawing and hanging out with friends.</StyledP>
            </HomeContentDiv>
        </StyledDiv>
    )
}