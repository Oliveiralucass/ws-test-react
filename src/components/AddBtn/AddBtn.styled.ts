import styled from 'styled-components'

export const AddBtnStyled = styled.button`
    font-size: 1.25rem;
    background-color: var(--color-detail-blue);
    border-radius: 6px;
    padding:6px 12px;
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;
    transition: all ease-in 150ms;

    &:hover{
        background-color: var(--color-detail-blue-on-hover);
    }
`

