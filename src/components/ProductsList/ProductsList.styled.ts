import styled from 'styled-components'

export const ProductsListStyled = styled.section`
    width: 80%;
    padding: 12px;
    border: 1px solid black;
    margin-bottom: 100px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        min-height: 600px
    }
`

export const ProductListElementStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 30px;
    
    p{
        width: 40%;
    }
    span{
        font-weight: 500;
    }

`