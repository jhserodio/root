import React, { Component } from 'react'

import Header from './header/Header'
import Grid from './grid/Grid'
import Noto from './noto/Noto'
import Valera from './valera/Valera'
import Roboto from './roboto/Roboto'
import Quicksand from './quicksand/Quicksand'

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
