import React from 'react'
import { Header } from '../../components/Header/Header'
import { Aside } from '../../components/Aside/Aside'
import { Main } from '../../components/Main/Main'
import { Footer } from '../../components/Footer/Footer'
import { HomeStyled, HomeStyledContent } from './Home.styled'

export const Home = () => {
  return (
    <HomeStyled>
      <Header />

      <HomeStyledContent>
        <Aside />
        <Main />
      </HomeStyledContent>

      <Footer />
    </HomeStyled>
  )
}
