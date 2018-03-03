import React from "react";
import { Heading, Link } from "spectacle";
import styled from "react-emotion";

import codeAcademy from "./assets/images/code-academy.png";
import mdn from "./assets/images/mdn.png";

import cassidy from "./assets/images/people/cassidy-williams.jpeg";
import jdd from "./assets/images/people/john-david-dalton.jpeg";
import kcd from "./assets/images/people/kent-c-dodds.jpeg";
import sarah from "./assets/images/people/sarah-drasner.jpeg";

import { Image } from "../../components";

const PersonImage = styled(Image)({
  borderRadius: 150,
  width: 150,
  height: 150
});

export const ButHow = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    OK, but how?
  </Heading>
);

ButHow.Props = {
  bgColor: "tertiary"
};

export const CodeAcademy = () => (
  <Link href="https://codeacademy.com" target="_blank" rel="noopener">
    <Image src={codeAcademy} />
  </Link>
);

CodeAcademy.Props = {
  bgColor: "black"
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
  bgColor: "black"
};

export const FollowDopePeople = () => (
  <Heading size={2} textFont="Arvo" textColor="white">
    Follow dope people
  </Heading>
);

FollowDopePeople.Props = {
  bgColor: "tertiary"
};

export const People = () => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {[
      {
        name: "Kent C Dodds",
        image: kcd
      },
      {
        name: "Cassidy Williams",
        image: cassidy
      },
      {
        name: "John David Dalton",
        image: jdd
      },
      {
        name: "Sarah Drasner",
        image: sarah
      }
    ].map(({ name, image }) => (
      <span style={{ margin: 10, fontSize: 16 }}>
        <PersonImage src={image} />
        {name}
      </span>
    ))}
  </div>
);
