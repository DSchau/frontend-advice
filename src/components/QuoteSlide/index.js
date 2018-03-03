import React, { Component } from "react";
import {
  BlockQuote,
  Cite,
  Fill,
  Layout,
  Link,
  Quote as QuoteComponent
} from "spectacle";

import { Image } from "../Image";

const Author = ({ author, to: href }) => {
  return (
    <Cite>
      <Link href={href} textColor="white">
        {author}
      </Link>
    </Cite>
  );
};

const Quote = ({ quote, ...rest }) => (
  <BlockQuote>
    <QuoteComponent
      textColor="white"
      borderLeft="1px solid white"
      style={{
        lineHeight: 1.25
      }}
      {...rest}
    >
      {quote}
    </QuoteComponent>
    <Author {...rest} />
  </BlockQuote>
);

export class QuoteSlide extends Component {
  render() {
    const { image, ...rest } = this.props;
    if (!image) {
      return <Quote textSize={40} {...rest} />;
    }
    return (
      <Layout>
        <Fill style={{ maxWidth: "40%" }}>
          <Image src={image} style={{ borderRadius: 300 }} />
        </Fill>
        <Fill style={{ display: "flex", alignItems: "center" }}>
          <Quote textSize={32} {...rest} />
        </Fill>
      </Layout>
    );
  }
}
