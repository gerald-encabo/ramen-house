import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
`
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingSpinner = styled.div`
    width: 70px;
    height: 70px;
    border: 10px solid;
    border-color: #000 transparent #555 transparent;
    border-radius: 50%;
    animation: ${spin} 1.2s linear infinite;
`