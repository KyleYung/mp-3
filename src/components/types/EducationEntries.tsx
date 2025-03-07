import styled from 'styled-components';

type EducationProps = {
    school: string;
    date: string;
    image: string;
    altText: string;
};

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 1vw;
`;

const StyledImage = styled.img`
    width: 30%;
    object-fit: cover;
    border-radius: 8px;
    padding: 1vh 1vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
`;

const StyledName = styled.p`
    font-weight: bold;
    font-size: calc(5px + 3vh);
`;

const StyledDate = styled.p`
    font-size: calc(5px + 2vh);
`;


export default function EducationEntries({ school, date, image, altText }: EducationProps) {
    return (
        <StyledDiv>
            <StyledImage src={image} alt={altText} />
            <Content>
                <StyledName>{school}</StyledName>
                <StyledDate>{date}</StyledDate>
            </Content>
        </StyledDiv>
    );
}