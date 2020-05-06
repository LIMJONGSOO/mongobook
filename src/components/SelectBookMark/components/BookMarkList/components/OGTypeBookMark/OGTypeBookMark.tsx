import React, {Component} from 'react';
import './OGTypeBookMark.scss';

type OGTypeBookMarkProps = {
  bookmarkList:Array<any>;
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