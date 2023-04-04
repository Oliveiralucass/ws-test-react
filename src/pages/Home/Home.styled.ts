import styled from 'styled-components'

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
`
export const HomeStyledContent = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    gap: 20px;

    @media (max-width: 868px){
        width: 90%;
    }

    @media (max-width: 728px){
        flex-direction: column;
    }
`