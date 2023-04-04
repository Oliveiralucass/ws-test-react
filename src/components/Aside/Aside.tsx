import React from 'react'
import { AsideStyled } from './Aside.styled'

export const Aside = () => {

 

  return (
    <AsideStyled>
      <nav>
        <ul>
          <li><h3>Products</h3></li>
          <li>Company profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    </AsideStyled>
  )
}
