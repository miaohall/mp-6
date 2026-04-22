import styled from "styled-components";
import Link from "next/link";

export default function Home() {

    const StyledDiv = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-image: linear-gradient(to bottom, #caf0f8, #90e0ef, #00b4d8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: monospace;
`;

    const StyledBox = styled.div`
    text-align: center;
    background-color: #0077b6;
    color: white;
    font-size: calc(2px + 1.6vw);
    padding: 10%;
    border-radius: 20px;
    border: 5px solid white;
    margin-left: 10%;
    margin-right: 10%;
    box-shadow:0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


    const StyledButton = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 4% 8%;
    border-radius: 15px;
    border: 4px solid white;
    font-size: calc(2px + 1.7vw);
    
    &:hover {
        background-color: white;
        color: #0077b6;
    }
`;

    return (
        <StyledDiv>
            <StyledBox>
                <h1>OAuth Demo</h1>
                <p>Sign in with GitHub below:</p>
                <br></br><br></br><br></br>
                <StyledButton href="/api/auth/signin">GitHub</StyledButton>
            </StyledBox>
        </StyledDiv>
    );
}