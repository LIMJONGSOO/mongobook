import React, {Component} from 'react';
import './OGTypeBookMark.scss';

type OGTypeBookMarkProps = {
  bookmarkList:Array<{
    type:string;
    title:string;
    link:string;
    og_img:string;
    og_title:string;
    og_desc:string;
  }>;
};


class OGTypeBookMark extends Component<OGTypeBookMarkProps> {
  constructor(props:Readonly<OGTypeBookMarkProps>) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
      </div>
    )
  };
}

export default OGTypeBookMark;
;