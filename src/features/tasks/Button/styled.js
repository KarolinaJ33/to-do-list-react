import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: auto;
    cursor: pointer;
    padding: 20px;
    transition: filter 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;
