import React from 'react';
import { Prettier } from '../../components';

export const PrettierSlide = () => (
  <Prettier
    code={`
import React from 'react';
import ReactDOM from    "react-dom"

export function   HelloWorld({   name,
  other, you, get, 
  the, idea,  
  right
}) {
        {/* This code is a dumpster fire of formatting */}
return <h1>
Hello {name}!
</h1>
}
  `.trim()}
  />
);

PrettierSlide.Props = {
  bgColor: 'secondary'
};
