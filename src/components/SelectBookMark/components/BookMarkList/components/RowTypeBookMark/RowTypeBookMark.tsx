import React, {Component} from 'react';
import './RowTypeBookMark.scss';

type RowTypeBookMarkProps = {
  bookmarkList:Array<{
    type:string;
    title:string;
    link:string;
    og_img:string;
    og_title:string;
    og_desc:string;
  }>;
};

class RowTypeBookMark extends Component<RowTypeBookMarkProps> {
  constructor(props:Readonly<RowTypeBookMarkProps>) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div></div>
    )
  };
}

export default RowTypeBookMark;