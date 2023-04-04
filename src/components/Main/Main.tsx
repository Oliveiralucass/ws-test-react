import React from 'react'
import { AddBtn } from '../AddBtn/AddBtn'
import { MainHeaderStyled, MainStyled } from './Main.styled'
import { ProductsList } from '../ProductsList/ProductsList'
import { useNavigate } from 'react-router-dom'

export const Main = () => {

  const navigate = useNavigate()

  return (
    <MainStyled>
      <MainHeaderStyled>
        <h2>List of products</h2>
        <div onClick={() => navigate('/add-product')}><AddBtn /></div>
      </MainHeaderStyled>

      <ProductsList />
    </MainStyled>
  )
}
