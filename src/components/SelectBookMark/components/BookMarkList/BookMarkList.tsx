import React, {Component} from 'react';
import './BookMarkList.scss';
import RowTypeBookMark from  './components/RowTypeBookMark/RowTypeBookMark';
import OGTypeBookMark from './components/OGTypeBookMark/OGTypeBookMark';
import { BookMarkData } from '../../SelectBookMark';
import backButton from 'assets/images/backButton.png';

type BookMarkListProps = {
  directory:string;
  directoryName:string;
  bookmarkListType:string;
  bookmarkList:Array<BookMarkData>;
  changedirectory:(directory:string | undefined, directoryName:string | undefined) => void;
  moveBackDirectory:() => void;
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
          <div className="currenct_directory">
            <img src={backButton} alt="addButton" onClick={() => this.props.moveBackDirectory()}/>
            현재경로 : {this.props.directoryName}
          </div>
          {this.props.bookmarkListType === 'list' ? <RowTypeBookMark bookmarkList={this.props.bookmarkList} changedirectory={this.props.changedirectory}/> : <OGTypeBookMark bookmarkList={this.props.bookmarkList} changedirectory={this.props.changedirectory}/>}
        </div>
      </div>
    )
  };
}

export default BookMarkList;