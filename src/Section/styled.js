import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background-color: white;
    margin-bottom: 10px;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;

    ${({ grid }) => grid && css`
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid #ddd ;
        align-item: center;
    `}

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
    padding: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;