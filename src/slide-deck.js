// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import SLIDES from './presentation';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: { name: 'Lato', googleFont: true, styles: [400] },
    secondary: { name: 'Arvo', googleFont: true, styles: [400, 700] }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {SLIDES}
      </Deck>
    );
  }
}
