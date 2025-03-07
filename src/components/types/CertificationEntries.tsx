import styled from 'styled-components';

type CertificationProps = {
    title: string;
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

export default function CertificationEntries({ title, date, details }: CertificationProps) {
    return (
        <StyledDiv>
            <StyledH1>{title}</StyledH1>
            <StyledP><strong>Date: </strong>{date}</StyledP>
            <StyledP><strong>Details: </strong>{details}</StyledP>
        </StyledDiv>
    );
}