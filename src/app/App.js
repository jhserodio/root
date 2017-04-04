import React, { Component } from 'react'

import { mock } from './mock'

import Header from './components/Header'
import Grid from './components/Grid'
import Logos from './components/Logos';
import Lato from './components/Lato';

class App extends Component {

  constructor() {
    super();

    this.state = mock.load();
  }

  render() {

    const brands = this.state.brands;
    const fonts = this.state.fonts;

    return (
      <div className="App">
        <Header />
        <main>
          <Grid>
            {fonts.map((font, i) => (
              <Logos brands={brands}
                     font={font}
                     key={i} />
            ))}
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
