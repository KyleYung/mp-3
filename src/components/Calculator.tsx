import styled from 'styled-components';
import { useState } from 'react';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: lightblue;
    width: 100%;
`;

const Calc = styled.div`
    background: lightcyan;
    text-align: center;
    padding: 2%;
    width: 100%;
`;

const CalcButtons = styled.div`
    background: lightcyan;
    padding: 2%;
`;

const StyledButton = styled.button`
    padding: 2%;
    margin: 1%;
    font-size: calc(2px + 2vh);
    background-color: white;
    border: 1px solid aqua;
    color: black;
`;

const StyledInput = styled.input`
    padding: 2%;
    margin: 1%;
    background-color: white;
    border: 1px solid aqua;
    color: black;
    font-size: calc(2px + 2vh);
`;

const OutputDiv = styled.div`
    background: white;
    border: 2px solid aqua;
`;

const OutputText = styled.p<{ $output: string }>`
    color: ${(props) => (Number(props.$output) < 0 ? "red" : "black")};
    font-weight: bold;
    font-size: calc(2px + 2vh);
`;

export default function Calculator() {
    const [first, setFirst] = useState(""); 
    const [second, setSecond] = useState(""); 
    const [output, setOutput] = useState("");

    const power = (first: number, second: number): number => {
        let output = 1;  
        if (second >= 0) {
            for (let i = 0; i < second; i++) {
                output = output * first;
            }
        } else {
            for (let i = 0; i < second; i++) {
                output = output * first;
            }
            output = 1/output;
        } 
        return output;
    }

    const reset = () => {
        setFirst("");
        setSecond("");
        setOutput("");
    };

    return (
        <>
            <StyledDiv>
                <h3>JavaScript Calculator</h3>
                <MainContainer>
                    <Calc>
                    <StyledInput type="number" placeholder="Enter a Number" value={first} onChange={(e) => setFirst(e.target.value)} />
                    <StyledInput type="number" placeholder="Enter a Number" value={second} onChange={(e) => setSecond(e.target.value)} />
                        <CalcButtons>
                            <StyledButton onClick={() => setOutput(String(Number(first) + Number(second)))}>+</StyledButton>
                            <StyledButton onClick={() => setOutput(String(Number(first) - Number(second)))}>-</StyledButton>
                            <StyledButton onClick={() => setOutput(String(Number(first) * Number(second)))}>*</StyledButton>
                            <StyledButton onClick={() => setOutput(String(Number(first) / Number(second)))}>/</StyledButton>
                            <StyledButton onClick={() => setOutput(String(power(Number(first), Number(second))))}>**</StyledButton>
                            <StyledButton onClick={reset}>Clear</StyledButton>
                        </CalcButtons>
                        <OutputDiv>
                            <OutputText $output={output}>{output}</OutputText>
                        </OutputDiv>
                    </Calc>
                </MainContainer>
            </StyledDiv>
        </>
    );
}