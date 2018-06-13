import React, { Component } from 'react';

import baseStyles from './base-styles';
import Tile from './blocks/Tile';

import logoImage from './assets/logo.png';
import tileImage from './assets/tile.jpg';

class App extends Component {
  render() {
    baseStyles();
    return (
      <Tile>
        <Tile.Image src={tileImage}></Tile.Image>
        <Tile.Strip>
          <Tile.Logo src={logoImage}></Tile.Logo>
          <Tile.H1>Home and Away</Tile.H1>
        </Tile.Strip>
      </Tile>
    );
  }
}

export default App;
