import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from 'styled-components'
import DefaultTheme from './DefaultTheme'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');
  body {
    font-family: Overpass !important;
    margin: 0;
    background-color: #fff;
  }
`
const ThemeProvider = ({ children, ...props }) => {
  return (
    <StyledThemeProvider theme={DefaultTheme} {...props}>
      <GlobalStyle></GlobalStyle>
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}

export default ThemeProvider
