import React from 'react';
import { GoToAction, Link } from 'spectacle';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';
import BackToBeginning from 'react-icons/lib/md/directions-run';

export const YouCanDoIt = () => null;

YouCanDoIt.Props = {
  bgImage: 'https://media.giphy.com/media/yoJC2K6rCzwNY2EngA/giphy.gif',
  notes: `
  `
};

export const ThankYou = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    {[
      {
        href: 'https://twitter.com/schaudustin',
        Icon: TwitterIcon,
        text: '@schaudustin'
      },
      {
        href: 'https://github.com/dschau',
        Icon: GithubIcon,
        text: 'dschau'
      },
      {
        href: 'https://dustinschau.com',
        Icon: WebsiteIcon,
        text: 'website'
      }
    ].map(({ href, Icon, text }) => (
      <Link
        href={href}
        textColor="white"
        style={{ display: 'block' }}
        target="_blank"
        rel="noopener"
        key={text}
      >
        <Icon color="white" style={{ marginRight: 6 }} />
        {text}
      </Link>
    ))}
    <GoToAction
      render={goTo => (
        <div onClick={() => goTo(1)} style={{ color: 'white', marginTop: 20 }}>
          <BackToBeginning color="white" />
          Back to beginning
        </div>
      )}
    />
  </div>
);

ThankYou.Props = {
  bgImage: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif'
};
