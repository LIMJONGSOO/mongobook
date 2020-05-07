import React, {Component} from 'react';
import './RowTypeBookMark.scss';
import {BookMarkData} from '../../../../SelectBookMark';

type RowTypeBookMarkProps = {
  bookmarkList:Array<BookMarkData>;
};

class RowTypeBookMark extends Component<RowTypeBookMarkProps> {
  constructor(props:Readonly<RowTypeBookMarkProps>) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(typeof(this.props.bookmarkList));
    console.log(this.props.bookmarkList);
    this.props.bookmarkList.map(() => {
      console.log('test');
    })
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

export default RowTypeBookMark;