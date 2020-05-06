import React, {Component} from 'react';
import './RowTypeBookMark.scss';

type RowTypeBookMarkProps = {
  bookmarkList:Array<any>;
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
            {bookmark}
          </div>
        ))}
      </div>
    )
  };
}

export default RowTypeBookMark;