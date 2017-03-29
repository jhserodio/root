import React, { Component } from 'react'

import Header from './components/Header'
import Grid from './components/Grid'
import Noto from './components/Noto'
import Valera from './components/Valera'
import Roboto from './components/Roboto'
import Quicksand from './components/Quicksand'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            <Noto />
            <Valera />
            <Roboto />
            <Quicksand />
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
