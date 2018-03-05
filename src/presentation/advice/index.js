import React from 'react';
import { Heading } from 'spectacle';
import styled from 'react-emotion';

import reactLogo from './assets/images/react-icon.svg';
import downloadsStats from './assets/images/download-stats.png';
import buildAnything from './assets/images/build-anything.jpeg';

import { Emoji, Image } from '../../components';
import { SPIN } from '../../style';

const SpinningImage = styled('img')({
  animation: `${SPIN} 5s infinite`
});

export const FirstACaveat = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    First&hellip; a caveat
  </Heading>
);

FirstACaveat.Props = {
  bgColor: 'tertiary'
};

export const BuildAnything = () => (
  <Heading size={3} caps textFont="Arvo" textColor="white">
    Build <em>anything</em>
  </Heading>
);

BuildAnything.Props = {
  bgImage: buildAnything,
  bgDarken: 0.5
};

export const NoSeriouslyAnything = () => <Emoji character="🤔" />;

NoSeriouslyAnything.Props = {
  bgColor: 'black'
};

export const PutItOnGithub = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Open source it
  </Heading>
);

PutItOnGithub.Props = {
  bgColor: 'tertiary'
};

export const UseWhatYouLike = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Use whatever you like
  </Heading>
);

UseWhatYouLike.Props = {
  bgColor: 'tertiary'
};

export const ReactSlide = () => <SpinningImage src={reactLogo} />;

export const ReactIsEatingTheWorld = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    React is eating the world
  </Heading>
);

ReactIsEatingTheWorld.Props = {
  bgColor: 'tertiary'
};

export const DownloadStats = () => <Image src={downloadsStats} />;

export const MindBlown = () => <Emoji character="🤯" />;

MindBlown.Props = {
  bgColor: 'black'
};

export const LearnJavaScript = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Learn JavaScript before frameworks
  </Heading>
);

LearnJavaScript.Props = {
  bgColor: 'tertiary'
};

export const CSSAndHTMLToo = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Don't forget about CSS &amp; HTML
  </Heading>
);

CSSAndHTMLToo.Props = {
  bgColor: 'tertiary'
};

export const NoBoilerplates = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Resist using boilerplates
  </Heading>
);

NoBoilerplates.Props = {
  bgColor: 'tertiary'
};

export const CliTooling = () => (
  <Heading size={3} textFont="Arvo" textColor="white">
    create-react-app, angular-cli, vue-cli, are <em>great</em>
  </Heading>
);

CliTooling.Props = {
  bgColor: 'tertiary'
};
