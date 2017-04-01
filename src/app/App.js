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
import MountSerrat from './components/MountSerrat'
import Lato from './components/Lato'
import Josefim from './components/Josefim'
import Dosis from './components/Dosis'
import Abel from './components/Abel'



class App extends Component {
  render() {
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
            <MountSerrat />
            <Lato />
            <Josefim />
            <Dosis />
            <Abel />
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
