import React, {Component} from 'react';
import './OGTypeBookMark.scss';
import { BookMarkData } from '../../../../SelectBookMark';
import folderIcon from 'assets/images/ogFolderIcon.png';

type OGTypeBookMarkProps = {
  bookmarkList:Array<BookMarkData>;
  changedirectory:(directory:string | undefined, directoryName:string | undefined) => void;
};


class OGTypeBookMark extends Component<OGTypeBookMarkProps> {
  constructor(props:Readonly<OGTypeBookMarkProps>) {
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
          <div key={idx} className="ogType" onClick={()=> this.clickBookmark(bookmark)}>
            <div className="image">
              <img src={bookmark.type === 'folder' ? folderIcon : bookmark.og_image} alt={bookmark.type}/>
            </div>
            <div className="text">
              <div className="title">{bookmark.og_title}</div>
              <div className="desc">{bookmark.og_description}</div>
            </div>
          </div>
        ))}
      </>
    )
  };
}

export default OGTypeBookMark;
;