import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import { CodePane } from 'spectacle';
import fetch from 'isomorphic-fetch';

const Button = styled('button')({
  outline: 'none',
  border: 'none',
  color: 'white',
  backgroundColor: '#03A9FC',
  fontSize: 48,
  padding: '1rem 2rem',
  minWidth: '50%',
  margin: '1rem',
  cursor: 'pointer',
  transition: '175ms ease-in-out',
  ':hover': {
    color: '#03A9FC',
    backgroundColor: 'white'
  }
});

export class Prettier extends Component {
  static FORM_URL = 'https://x5hnggrupe.execute-api.us-east-1.amazonaws.com/development/prettier';

  constructor(props) {
    super(props);

    this.state = {
      code: props.code
    };
  }

  handleClick = () => {
    fetch(Prettier.FORM_URL, {
      body: JSON.stringify({
        code: this.state.code
      }),
      method: 'POST',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          code: json.code.replace(
            'This code is a dumpster fire',
            'This code is NOT a dumpster fire'
          )
        });
      });
  };

  render() {
    return (
      <Fragment>
        <CodePane
          source={this.state.code}
          lang="javascript"
          theme="light"
          textSize={24}
          {...this.props}
        />
        <Button onClick={this.handleClick}>
          <span role="img" aria-label="Nail polish">
            💅
          </span>
        </Button>
      </Fragment>
    );
  }
}
