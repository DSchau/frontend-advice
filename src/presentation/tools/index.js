import React from 'react';
import { Heading, Image as SpectacleImage } from 'spectacle';
import styled from 'react-emotion';
import { Prettier } from '../../components';

import toolingBackground from './assets/images/basic-tooling-optimized.jpeg';
import nodeLogo from './assets/images/nodejs.svg';
import npmLogo from './assets/images/npm.svg';
import webpackLogo from './assets/images/webpack.svg';
import babelLogo from './assets/images/babel.svg';

const Image = styled(SpectacleImage)`
  max-height: 50vh !important;
`;

export const Tooling = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Basic tooling
  </Heading>
);

Tooling.Props = {
  bgImage: toolingBackground,
  bgDarken: 0.75
};

export const Node = () => <Image src={nodeLogo} />;

export const Npm = () => <Image src={npmLogo} />;

export const Webpack = () => <Image src={webpackLogo} />;

export const Babel = () => <Image src={babelLogo} />;

export const PrettierSlide = () => (
  <Prettier
    theme="dark"
    code={`
import React from   "react";

export function OhHello({
  name,
    otherParam
  }) {
  return <h1 style={{ color:  'red' }}>This is poorly formatted code&hellip;</h1>
}
    `.trim()}
  />
);
