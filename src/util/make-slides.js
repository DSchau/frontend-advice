import React from 'react';
import { Slide as SlideComponent, SlideSet } from 'spectacle';

export const makeSlides = slides => {
  return slides.map((slideset, index) => (
    <SlideSet key={index}>
      {
        Object.keys(slideset).map((slide, slideSetIndex) => {
          const Slide = slideset[slide];
          return (
            <SlideComponent key={`${index}-${slideSetIndex}`} {...Slide.Props || {}}><Slide /></SlideComponent>
          );
        })
      }
    </SlideSet>
  ));
};
