import React from 'react';
import styled from 'react-emotion';

const Character = styled('span')({
  fontSize: 256
});

export function Emoji({ character }) {
  return <Character>{character}</Character>;
}
