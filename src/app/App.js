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
      colors: {
        smooth: '#DEFDF0',
        brand: '#152A38',
        other: '#E71D36'
      },
      brands: ['root', 'Lich', 'ESTON'],
      fonts: [
        'Roboto',
        'Roboto Mono',
        'Quicksand',
        'Itim',
        'Oswald',
        'Raleway',
        'Source sans pro',
        'MontSerrat',
        'Lato',
        'Josefin',
        'Dosis',
        'Abel',
        'Valera',
        'Noto sans'
      ]
    }
  }

  render() {

    const brands = this.state.brands;

    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            <Noto brands={brands}/>
            <Valera brands={brands}/>
            <RobotoMono brands={brands}/>
            <Roboto brands={brands}/>
            <Quicksand brands={brands}/>
            <Itim brands={brands}/>
            <Oswald brands={brands}/>
            <Raleway brands={brands}/>
            <Source brands={brands}/>
            <MontSerrat brands={brands}/>
            <Lato brands={brands}/>
            <Josefin brands={brands}/>
            <Dosis brands={brands}/>
            <Abel brands={brands}/>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
