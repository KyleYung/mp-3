import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    background: lightseagreen;
    color: black;
    padding: 1vh 1vw;

    @media (max-width: 900px) {
        align-items: center;
        justify-content: center;
    }
`

export default function Header() {
    return (
        <StyledDiv>
            <h1>Kyle Yung</h1>
            <p>My Online Resume</p>
        </StyledDiv>
    );
}
