import styled from 'styled-components';

type ProjectProps = {
    title: string;
    role: string;
    date: string;
    details: string;
};

const StyledDiv = styled.div`
    text-align: left;
    color: black;
    padding: 2%;
`

const StyledP = styled.p`
    color: black;
    font-size: calc(5px + 2vh);
`

const StyledH1 = styled.h1`
    font-size: calc(2px + 3vh);
    color: black;
`

export default function ProjectEntries({ title, role, date, details }: ProjectProps) {
    return (
        <StyledDiv>
            <StyledH1>{title}</StyledH1>
            <StyledP><strong>Role: </strong>{role}</StyledP>
            <StyledP><strong>Date: </strong>{date}</StyledP>
            <StyledP><strong>Details: </strong>{details}</StyledP>
        </StyledDiv>
    );
}