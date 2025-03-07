import {Link} from "react-router";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: darkcyan;
    width: 30%;

    @media (max-width: 900px) {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-size: calc(2px + 2vw);

    @media (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const StyledLi = styled.li`
    display: block;
    text-decoration: none;
    font-size: calc(2px + 2vw);
    padding: 2vh 0;
    margin: 4vh auto;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    width: 100%;
    padding: 1vh 1vw;
`

export default function Nav() {
    return (
        <StyledDiv>
            <nav>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/experience">Experience</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/education">Education</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/skills">Skills</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/certifications">Certifications</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/projects">Projects</StyledLink>
                    </StyledLi>
                </StyledUl>
            </nav>
        </StyledDiv>
    );
}
