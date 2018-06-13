import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

/*
* Base styles | Reset CSS
*/
const baseStyles = () => injectGlobal`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  html,
  html * {
    box-sizing: border-box;
  }
`;

export default baseStyles;
