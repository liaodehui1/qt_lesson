import React, { Component } from 'react';

class Header extends Component {
  buy() {
    console.log('buy')
  }
  render() {
    return (
      <div>
        hello server
        <button onClick={this.buy}>buy</button>
      </div>
    );
  }
}

export default Header;