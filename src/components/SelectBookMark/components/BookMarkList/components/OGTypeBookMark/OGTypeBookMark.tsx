import React, {Component} from 'react';
import './OGTypeBookMark.scss';
import {BookMarkData} from '../../../../SelectBookMark';

type OGTypeBookMarkProps = {
  bookmarkList:Array<BookMarkData>;
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
        {this.props.bookmarkList.map((bookmark, idx) => (
          <div>
            {bookmark.name}
          </div>
        ))}
      </div>
    )
  };
}

export default OGTypeBookMark;
;