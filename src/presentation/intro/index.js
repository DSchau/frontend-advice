import React from "react";
import { Heading, Fill, Layout, Link } from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

import TwitterIcon from "react-icons/lib/fa/twitter";
import GithubIcon from "react-icons/lib/fa/github";
import WebsiteIcon from "react-icons/lib/md/web";

import { Image } from "../../components";

const images = {
  titleSlide: require("./assets/images/title-slide-optimized.jpeg"),
  opiLogo: require("./assets/images/object-partners.svg"),
  opiMn: require("./assets/images/opi-mn-optimized.jpeg"),
  upLogo: require("./assets/images/up.svg"),
  upBackground: require("./assets/images/up-bg-optimized.jpeg"),
  me: require("./assets/images/me-optimized.jpeg")
};

preloader(images);

export const Intro = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "85vh"
    }}
  >
    <Layout>
      <Fill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 20
        }}
      >
        <Heading size={3} caps textFont="Arvo" textColor="tertiary">
          Frontend Advice
        </Heading>
      </Fill>
      <Fill
        margin={10}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Heading size={6} textColor="primary" textAlign="left">
          &hellip; and some other things too
        </Heading>
      </Fill>
    </Layout>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://dschau.github.io/career-advice/"
        textColor="rgba(255, 255, 255, 0.7)"
      >
        https://frontend-advice.dustinschau.com
      </Link>
    </div>
  </div>
);

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.75,
  notes: `

  `
};

export const AboutMe = () => (
  <Layout>
    <Fill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who's this guy?
      </Heading>
      <Heading size={6} style={{ display: "flex" }}>
        <TwitterIcon
          color="white"
          style={{ display: "inline-block", marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: "flex" }}>
        <GithubIcon
          color="white"
          style={{ display: "inline-block", marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
      <Heading size={6} style={{ display: "flex" }}>
        <WebsiteIcon
          color="white"
          style={{ display: "inline-block", marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: "40%"
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>
);

AboutMe.Props = {
  bgColor: "tertiary",
  notes: `
- Graduated with a CS degree from Creighton in 2013
- Frontend developer specialist, specializing in all things JavaScript
- Do a fair bit of backend and utility development in NodeJS, e.g. backend services, build tooling, etc.
  `
};

export const UnionPacific = () => (
  <Image src={images.upLogo} style={{ height: "33%", width: "33%" }} />
);

UnionPacific.Props = {
  bgImage: images.upBackground,
  bgDarken: 0.5,
  notes: `
- Started my internship at Union Pacific as a full time intern winter of 2013 (aka my last year)
- Learned an immense amount in my ~3 years at Union Pacific; great place to start my career
- Generally a great place to be and they do a lot of things right
  `
};

export const ObjectPartners = () => (
  <Image src={images.opiLogo} style={{ width: "100%" }} />
);

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8,
  notes: `
- Transitioned to a great consulting company called Object Partners, Inc.
- Full stack consulants for a variety of clients and projects, including Best Buy, Target, Mutual of Omaha, TD Ameritrade, etc.
- Of our graduating class of 9 CS majors in 2013, 3 have worked for Object Partners, and 2 currently work there (Cody and myself)
  `
};
