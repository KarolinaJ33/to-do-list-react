import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;