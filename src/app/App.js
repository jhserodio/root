import React, { Component } from 'react'

import Header from './components/Header'
import Grid from './components/Grid'
import Noto from './components/Noto'
import Valera from './components/Valera'
import Roboto from './components/Roboto'
import RobotoMono from './components/RobotoMono'
import Quicksand from './components/Quicksand'
import Itim from './components/Itim'
import Oswald from './components/Oswald'
import Raleway from './components/Raleway'
import Source from './components/Source'
import MontSerrat from './components/MontSerrat'
import Lato from './components/Lato'
import Josefin from './components/Josefin'
import Dosis from './components/Dosis'
import Abel from './components/Abel'



class App extends Component {

  constructor() {
    super();

    this.state = {
      brands: ['root', 'Litch', 'stone']
    }
  }

  render() {

    const brands = this.state.brands;

    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            <Noto />
            <Valera />
            <RobotoMono />
            <Roboto />
            <Quicksand />
            <Itim />
            <Oswald />
            <Raleway />
            <Source />
            <MontSerrat />
            <Lato />
            <Josefin />
            <Dosis />
            <Abel brands={brands}/>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
