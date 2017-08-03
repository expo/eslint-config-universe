import React from 'react';
import { connect } from 'react-redux';

@connect()
export default class Example extends React.Component {
  state = {
    x: 'x',
    ...{
      y: 'y',
    },
  };

  componentDidMount() {
    fetch('http://example.com');
    new XMLHttpRequest().send();
    Uint16Array.from([1, 2, 3, 4, 5]);
    new SharedArrayBuffer(16).slice();
  }

  render() {
    return (
      <div>
        {this.state.x}
      </div>
    );
  }
}
