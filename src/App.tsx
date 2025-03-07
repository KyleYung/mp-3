import "./App.css";
import styled from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

function Root() {
  return (
    <Container>
      <Header/>
      <StyledDiv>
        <Nav/>
        <Main/>
      </StyledDiv>
      <Footer/>
    </Container>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root}]);

export default function App() {
  return <RouterProvider router={router} />;
}
