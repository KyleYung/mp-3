import { Routes, Route } from "react-router";
import styled from "styled-components";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default function Main() {
    return (
        <StyledDiv>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/experience" element={<Experience/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/certifications" element={<Certifications/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </StyledDiv>
    );
}