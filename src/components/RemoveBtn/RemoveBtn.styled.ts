import React from 'react'
import styled from 'styled-components'

export const RemoveBtnStyled = styled.div`
    font-weight:700;
    font-size: 1.25rem;
    color:#ffffff;
    background-color: #dc2626;
    width: 40px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease-in 150ms;

    
    &:hover{
        background-color:#991b1b ;
    }

    @media (max-width: 728px){
        font-size: 1rem;
    }
`
