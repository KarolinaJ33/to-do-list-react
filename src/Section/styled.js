import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin-bottom: 10px;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid #ddd ;
    align-item: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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