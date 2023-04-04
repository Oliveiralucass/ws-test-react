import React from 'react'
import styled from 'styled-components'

export const NewProductStyled = styled.div`

`

export const NewProductStyledForm = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    gap: 20px;
    min-height: 700px;
    

    h2 {
        color: var(--color-detail-blue);
        text-align: center
    }

    form {
        display: flex;
        flex-direction: column;
        
        gap: 22px;

       
        label {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--color-secondary);
            text-align: center
            align-self:justify;
        }
       
        

        input, select {
            background-color: white;
            width: 340px;
            height: 45px;
            border-radius: 10px;
            font-size: 1rem;
            padding: 0 15px;
            border: 2px solid var(--color-detail-blue);
            box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
            transition: 0.5s;
            &:focus {
                border-color: var(--color-detail-blue-on-hover);
                transition: 0.5s;
                outline: none;
            }

            
        }
        button {
            margin-top: 24px;
            width: 340px;
            height: 45px;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            color: #fafafa;
            background-color: var(--color-detail-blue);
            border: none !important;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
                transition: 0.5s;
                background-color: var(--color-detail-blue-on-hover);
            }
        }
        button {
            margin-top: 10px;
            background-color: transparent;
            color: var(--color-detail-blue);
            border: 2px solid var(--color-detail-blue) !important;
            transition: 0.5s;
            &:hover {
                border-color: var(--color-detail-blue-on-hover) !important;
                color: var(--color-detail-blue-on-hover);
                background-color: transparent;
                transition: 0.5s;
            }
        }

        @media (max-width: 360px){
            input, select, button {
                width: 280px;
            } 
        }
    }
`