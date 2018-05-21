import { react } from 'react';
import React, { Component } from 'react';
import './header.css';
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);

    this.state= {
    title: 'This is my new testing site',

  };
}

onClick = (e) => {
  this.setState({
    title: 'You clicked',
  })
}

  render() {
    return (
      <button className="container" >
        <p>{this.state.title}</p>
        <p onClick={this.onClick} className='hyper'>click me!</p>
      </button>
    )
  }
}

export default Header;
