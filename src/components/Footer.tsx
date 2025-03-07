import styled from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: lightseagreen;
    width: 100%;
    color: black;
`

const StyledLink = styled(Link)`
    color: white;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Kyle Yung <StyledLink to={``}>Credits</StyledLink> &copy;</p>
        </StyledFooter>
    );
}
