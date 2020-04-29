import React, {Component} from 'react';
import logo from 'assets/images/logo.png';
import './Main.scss';
import SelectBookMark from '../SelectBookMark/SelectBookMark';

class Main extends Component {
  state = {
    showSelectPage: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showSelectPage: true});
    }, 1000);
  }
  
  render() {
    return (
      <div className="main">
        {!this.state.showSelectPage ?
          <div className="main_page"><img className="logo" src={logo} alt="logo"></img></div>
          :
          <SelectBookMark />
        }
      </div>
    )
  };
}

export default Main;