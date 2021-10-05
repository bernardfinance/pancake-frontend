import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: url(images/background.jpg);
    background-size: cover;

    // img {
    //   height: auto;
    //   max-width: 100%;
    // }
  }
  div#root nav{
    background-color: transparent;
  }
  div#root> div:nth-child(1)> div:nth-child(2)> div:nth-child(1){
    background-color: transparent;
  }
  div#root> div:nth-child(1)> div:nth-child(2)> div:nth-child(1)> div:nth-child(2){
    display: none;
  }
`

export default GlobalStyle
