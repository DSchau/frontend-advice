import React from 'react';
import { Slide as SlideComponent, SlideSet } from 'spectacle';

import * as INTRO from './intro';
import * as ADVICE from './advice';
import * as RESOURCES from './resources';
import * as CONCLUSION from './conclusion';

export const makeSlides = slides => {
  return slides.map((slideset, index) => (
    <SlideSet key={index}>
      {Object.keys(slideset).map((slide, slideSetIndex) => {
        const Slide = slideset[slide];
        return (
          <SlideComponent
            key={`${index}-${slideSetIndex}`}
            {...Slide.Props || {}}
          >
            <Slide />
          </SlideComponent>
        );
      })}
    </SlideSet>
  ));
};

export default makeSlides([INTRO, ADVICE, RESOURCES, CONCLUSION]);
