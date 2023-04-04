import React from 'react'
import { ProductListElementStyled, ProductsListStyled } from './ProductsList.styled'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { EditBtn } from '../EditBtn/EditBtn'
import { RemoveBtn } from '../RemoveBtn/RemoveBtn'
import { removeProduct } from '../../app/reducers/productSlice'
import { useNavigate } from 'react-router-dom'

export const ProductsList = () => {

  const {products} = useAppSelector(state => state.products)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <ProductsListStyled>
      <ul>
        {products && products.map((product, index) => {
          return <ProductListElementStyled key={index}>
            <p>{product.name}</p>
            <span>{`$${product.price.toFixed(2)}`}</span>
            <div onClick={() => navigate(`/product/${product.name}`, {state: product})
              }><EditBtn /></div>
            <div onClick={() => dispatch(removeProduct({name: product.name, price: product.price}))}><RemoveBtn /></div>
          </ProductListElementStyled>
        })}
      </ul>      
    </ProductsListStyled>
  )
}
