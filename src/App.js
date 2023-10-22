import React from 'react'
import {createGlobalStyle} from 'styled-components' 
import MarketPage from './Components/MarketPage/MarketPage'
import ProductDetail from './Components/MarketPage/ProductDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
/* reset */
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

body,
h1,
ul,
li,
button,
img,
p,
strong {
  margin: 0;
  padding: 0;
}

body {
  background-color: #e9e9e9;
  font-family: Nanum Gothic;
}

ul,
li {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  background: none;
  border: 0;
}

.container {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: white;
  
}
`

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MarketPage/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}
