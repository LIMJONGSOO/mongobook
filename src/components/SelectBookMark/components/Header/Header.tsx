import React, {Component} from 'react';
import logo from 'assets/images/logo.png';
import './Header.scss';

class Header extends Component {
  state = {}

  componentDidMount() {
  }
  
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
      </div>
    )
  };
}

export default Header;