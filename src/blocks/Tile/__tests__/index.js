import React from 'react';
import Tile from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Tile block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Tile>
        <Tile.Image src=""></Tile.Image>
        <Tile.Strip>
          <Tile.Logo src=""></Tile.Logo>
          <Tile.H1>text</Tile.H1>
        </Tile.Strip>
      </Tile>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
