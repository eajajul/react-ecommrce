import React from 'react'
import  Products  from "./components/products/Products";
import  Navbar from "./components/products/Navbar/Navbar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Carouselj from "./components/products/Carousel/Carousel";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container>
        <Carouselj />
      <Products></Products>
      </Container>
    </div>
  )
}

export default App
