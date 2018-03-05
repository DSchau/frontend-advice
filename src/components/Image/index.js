import React from 'react';
import { Image as SpectacleImage } from 'spectacle';

export function Image({ className, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative'
      }}
    >
      <SpectacleImage
        className={className}
        style={{
          display: 'block',
          maxWidth: '100%',
          ...style
        }}
        {...rest}
      />
    </div>
  );
}
