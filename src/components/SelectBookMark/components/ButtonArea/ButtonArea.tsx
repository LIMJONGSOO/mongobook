import React, {Component} from 'react';
import addButton from 'assets/images/addButton.png';
import delButton from 'assets/images/delButton.png';
import listButton from 'assets/images/listButton.png';
import listButtonActive from 'assets/images/listButtonActive.png';
import ogButton from 'assets/images/ogButton.png';
import ogButtonActive from 'assets/images/ogButtonActive.png';

import './ButtonArea.scss';

class ButtonArea extends Component {
  render () {
    return (
      <div className="button_area">
        <div className="left">
          <img src={addButton} alt="addButton" />
          <img src={delButton} alt="delButton" className="del"/>
        </div>
        <div className="right">
          <img src={ogButton} alt="ogButton" />
          <img src={listButton} alt="listButton" />
        </div>
      </div>
    )
  };
}

export default ButtonArea;
