import styled from 'styled-components';

type SkillsProps = {
    title: string;
    image: string;
    altText: string;
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    padding: 2%;
`

const StyledP = styled.p`
    color: black;
    font-weight: bold;
    font-size: calc(5px + 2vh);
`

const StyledImage = styled.img`
    width: 20%;
    object-fit: cover;
    border-radius: 20%;
    padding: 0.5vh 0.5vw;
`;

export default function SkillsEntries({ title, image, altText }: SkillsProps) {
    return (
        <StyledDiv>
            <StyledImage src={image} alt={altText} />
            <StyledP>{title}</StyledP>
        </StyledDiv>
    );
}