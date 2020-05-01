import React, {Component} from 'react';
import addButton from 'assets/images/addButton.png';
import delButton from 'assets/images/delButton.png';
import listButton from 'assets/images/listButton.png';
import listButtonActive from 'assets/images/listButtonActive.png';
import ogButton from 'assets/images/ogButton.png';
import ogButtonActive from 'assets/images/ogButtonActive.png';

import './ButtonArea.scss';

type ButtonAreaProps = {
  openRegistlayer: boolean;
  bookmarkListType:string;
  directory:string;
  openRegistLayer:() => void;
  changeListType:(tpye:string) => void;
};

class ButtonArea extends Component<ButtonAreaProps> {
  constructor(props: Readonly<ButtonAreaProps>) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="button_area">
        <div className="left">
          <img src={addButton} alt="addButton" onClick={() => this.props.openRegistLayer()}/>
          <img src={delButton} alt="delButton" className="del"/>
        </div>
        <div className="right">
          <img src={this.props.bookmarkListType === 'list' ? listButtonActive : listButton} alt="list type" onClick={() => this.props.changeListType('list')}/>
          <img src={this.props.bookmarkListType === 'og' ? ogButtonActive : ogButton} alt="opengraph type" onClick={() => this.props.changeListType('og')}/>
        </div>
      </div>
    )
  };
}

export default ButtonArea;
