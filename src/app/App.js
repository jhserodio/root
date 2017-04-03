import React, { Component } from 'react'

import { mock } from './mock'

import Header from './components/Header'
import Grid from './components/Grid'

class App extends Component {

  constructor() {
    super();

    this.state = mock.load();
  }

  render() {

    const brands = this.state.brands;

    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
