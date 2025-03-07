import styled from 'styled-components';

type ExperienceProps = {
    job: string;
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

export default function ExperienceEntries({ job, role, date, details }: ExperienceProps) {
    return (
        <StyledDiv>
            <StyledH1>{job}</StyledH1>
            <StyledP><strong>Role: </strong>{role}</StyledP>
            <StyledP><strong>Date: </strong>{date}</StyledP>
            <StyledP><strong>Details: </strong>{details}</StyledP>
        </StyledDiv>
    );
}