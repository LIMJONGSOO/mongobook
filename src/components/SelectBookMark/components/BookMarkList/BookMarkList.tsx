import React, {Component} from 'react';
import './BookMarkList.scss';
import RowTypeBookMark from  './components/RowTypeBookMark/RowTypeBookMark';
import OGTypeBookMark from './components/OGTypeBookMark/OGTypeBookMark';

class BookMarkList extends Component {
  state = {type: 'list'}

  componentDidMount() {
  }
  
  render() {
    return (
      <div className="bookmark_list">
        <div className="bookmark_list_area">
          <div className="currenct_directory"></div>
          {this.state.type === 'list' ? <RowTypeBookMark /> : <OGTypeBookMark />}
        </div>
      </div>
    )
  };
}

export default BookMarkList;