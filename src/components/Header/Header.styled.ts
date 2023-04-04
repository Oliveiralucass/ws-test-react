import React from 'react'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background-color: var(--color-secondary);
    
`
export const HeaderStyledContainer = styled.div`
    max-width:1200px;
    margin: 0 auto;

    color: #ffffff;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 30px;

    

`

export const HeaderImageStyled = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: #ffffff;

    img{ 
        width: 48px;
        height: 48px;
    }

    @media (max-width: 600px) {
        img{ 
            width: 36px;
            height: 36px;
        } 
        h3 {
            display: none;
        }
    }
`

export const HeaderTextStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;    

    @media (max-width: 600px) {
        
        h1 {
            font-size: 1.25rem
        }
    }
`