import React, { Component } from 'react';

class Header extends Component {
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