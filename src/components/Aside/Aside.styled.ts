import styled from 'styled-components'

export const AsideStyled = styled.aside`
    height: 200px;
    border: 1px solid black;
    padding: 12px;

    h3{
        text-decoration: underline;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap:4px
    }
`