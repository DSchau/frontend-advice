import React from 'react';
import { Heading, Link } from 'spectacle';
import styled from 'react-emotion';

import codeAcademy from './assets/images/code-academy-optimized.png';
import mdn from './assets/images/mdn-optimized.png';
import stackOverflow from './assets/images/stack-overflow-optimized.png';
import google from './assets/images/google-it.gif';
import frontendDevBookmarks from './assets/images/frontend-dev-bookmarks-optimized.png';
import codeSandbox from './assets/images/code-sandbox-optimized.png';

import cassidy from './assets/images/people/cassidy-williams-optimized.jpeg';
import jdd from './assets/images/people/john-david-dalton-optimized.jpeg';
import kcd from './assets/images/people/kent-c-dodds-optimized.jpeg';
import sarah from './assets/images/people/sarah-drasner-optimized.jpeg';
import da from './assets/images/people/dan-abramov-optimized.jpeg';
import gm from './assets/images/people/glen-maddern.png';
import ch from './assets/images/people/cory-house-optimized.jpeg';
import sp from './assets/images/people/sunil-pai-optimized.jpeg';
import ao from './assets/images/people/addy-osmani-optimized.jpeg';
import horse from './assets/images/people/horse-js-optimized.png';

import { Image } from '../../components';

const PersonImage = styled(Image)({
  borderRadius: 150,
  width: 150,
  height: 150
});

export const ButHow = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    OK great, but how?
  </Heading>
);

ButHow.Props = {
  bgColor: 'tertiary'
};

export const CodeAcademy = () => (
  <Link href="https://codeacademy.com" target="_blank" rel="noopener">
    <Image src={codeAcademy} />
  </Link>
);

CodeAcademy.Props = {
  bgColor: 'black'
};

export const Mdn = () => (
  <Link
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
    target="_blank"
    rel="noopener"
  >
    <Image src={mdn} />
  </Link>
);

Mdn.Props = {
  bgColor: 'black'
};

export const StackOverflow = () => (
  <Link href="https://stackoverflow.com" target="_blank" rel="noopener">
    <Image src={stackOverflow} />
  </Link>
);

StackOverflow.Props = {
  bgColor: 'black'
};

export const GoogleIt = () => (
  <Link href="https://google.com" target="_blank" rel="noopener">
    <Image src={google} />
  </Link>
);

GoogleIt.Props = {
  bgColor: 'white'
};

export const FrontendDevBookmarks = () => (
  <Link
    href="https://github.com/dypsilon/frontend-dev-bookmarks"
    target="_blank"
    rel="noopener"
  >
    <Image src={frontendDevBookmarks} />
  </Link>
);

FrontendDevBookmarks.Props = {
  bgColor: 'black'
};

export const CodeSandbox = () => (
  <Link href="https://codesandbox.io/" target="_blank" rel="noopener">
    <Image src={codeSandbox} />
  </Link>
);

CodeSandbox.Props = {
  bgColor: 'black'
};

export const FollowDopePeople = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Follow dope people
  </Heading>
);

FollowDopePeople.Props = {
  bgColor: 'tertiary'
};

export const People = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {[
      {
        name: 'Kent C Dodds',
        image: kcd,
        twitter: 'kentcdodds'
      },
      {
        name: 'Cassidy Williams',
        image: cassidy,
        twitter: 'cassidoo'
      },
      {
        name: 'John David Dalton',
        image: jdd,
        twitter: 'jdalton'
      },
      {
        name: 'Sarah Drasner',
        image: sarah,
        twitter: 'sarah_edo'
      },
      {
        name: 'Dan Abramov',
        image: da,
        twitter: 'dan_abramov'
      },
      {
        name: 'Glen Maddern',
        image: gm,
        twitter: 'glenmaddern'
      },
      {
        name: 'Cory House',
        image: ch,
        twitter: 'housecor'
      },
      {
        name: 'Sunil Pai',
        image: sp,
        twitter: 'threepointone'
      },
      {
        name: 'Addy Osmani',
        image: ao,
        twitter: 'addyosmani'
      },
      {
        name: 'HorseJS',
        image: horse,
        twitter: 'horse_js'
      }
    ].map(({ name, image, twitter }) => (
      <Link
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener"
        style={{ color: 'inherit', margin: 10, fontSize: 16 }}
      >
        <PersonImage src={image} />
        {name}
      </Link>
    ))}
  </div>
);
