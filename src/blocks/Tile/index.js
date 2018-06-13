import styled from 'styled-components';

import Image from './Image';
import Logo from './Logo';
import Strip from './Strip';

// Reusable from global H1 styles of the page
import H1 from '../../elements/H1';

const Tile = styled.div`
  position: relative;
  width: 100%;
  max-width: 30rem;
`;

Tile.Image = Image;
Tile.Logo = Logo;
Tile.Strip = Strip;
Tile.H1 = H1;

export default Tile;
