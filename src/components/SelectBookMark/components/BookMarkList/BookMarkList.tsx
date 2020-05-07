import React, {Component} from 'react';
import './BookMarkList.scss';
import RowTypeBookMark from  './components/RowTypeBookMark/RowTypeBookMark';
import OGTypeBookMark from './components/OGTypeBookMark/OGTypeBookMark';
import {BookMarkData} from '../../SelectBookMark';

type BookMarkListProps = {
  directory:string;
  directoryName:string;
  bookmarkListType:string;
  bookmarkList:Array<BookMarkData>;
};

class BookMarkList extends Component<BookMarkListProps> {
  constructor(props: Readonly<BookMarkListProps>) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="bookmark_list">
        <div className="bookmark_list_area">
          <div className="currenct_directory">{this.props.directoryName}</div>
          {this.props.bookmarkListType === 'list' ? <RowTypeBookMark bookmarkList={this.props.bookmarkList}/> : <OGTypeBookMark bookmarkList={this.props.bookmarkList}/>}
        </div>
      </div>
    )
  };
}

export default BookMarkList;