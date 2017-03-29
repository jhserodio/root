import React, { Component } from 'react'

import Header from './header/Header'
import Grid from './grid/Grid'
import Domus from './domus/Domus'
import Vites from './vites/Vites'
import Santorini from './santorini/Santorini'
import Eorix from './eorix/Eorix'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            <Domus />
            <Vites />
            <Santorini />
            <Eorix />
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
