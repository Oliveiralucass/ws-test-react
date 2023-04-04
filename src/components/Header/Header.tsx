import React from 'react'
import { HeaderImageStyled, HeaderStyled, HeaderStyledContainer, HeaderTextStyled } from './Header.styled'
import LOGO from '../../assets/images/logows.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderStyledContainer>
        <Link to={'/'}>
          <HeaderImageStyled>
            <img src={LOGO} alt="WS Work Sistemas" />
            <h3>Sistemas</h3>
          </HeaderImageStyled>
        </Link>
        
        
        
        <HeaderTextStyled>
          <h1>My products list</h1>
        </HeaderTextStyled>
      </HeaderStyledContainer>
    </HeaderStyled>
  )
}
