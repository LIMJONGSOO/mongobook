import React, {Component} from 'react';
import './RowTypeBookMark.scss';
import { BookMarkData } from '../../../../SelectBookMark';
import foldeIrcon from 'assets/images/foldeIrcon.png';
import linkIcon from 'assets/images/linkIcon.png';

type RowTypeBookMarkProps = {
  bookmarkList:Array<BookMarkData>;
  changedirectory:(directory:string | undefined, directoryName:string | undefined) => void;
};

class RowTypeBookMark extends Component<RowTypeBookMarkProps> {
  constructor(props:Readonly<RowTypeBookMarkProps>) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
  }
  
  clickBookmark(bookmark: BookMarkData) {
    if(bookmark.type === 'link') {
      window.open(bookmark.url, "_blank");
    } else {
      this.props.changedirectory(bookmark._id, bookmark.name);
    }
  }

  render() {
    return (
      <>
        {this.props.bookmarkList && this.props.bookmarkList.map((bookmark, idx) => (
          <div key={idx} className="rowType" onClick={()=>this.clickBookmark(bookmark)}>
            <img src={bookmark.type === 'folder' ? foldeIrcon : linkIcon} alt={bookmark.type}/>
            <div className="name">{bookmark.name}</div>
          </div>
        ))}
      </>
    )
  };
}

export default RowTypeBookMark;