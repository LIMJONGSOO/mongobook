import React, {Component} from 'react';
import './RegistBookMark.scss';
import { threadId } from 'worker_threads';

type RegistBookMarkProps = {
  openRegistlayer:boolean;
  directory:string;
  directoryName:string;
  closeRegistLayer:() => void;
}
class RegistBookMark extends Component<RegistBookMarkProps> {

  state: {
    type: string;
    directory: string;
    name:string;
    url:string;
  };

  constructor(props: Readonly<RegistBookMarkProps>) {
    super(props);
    this.state={
      type: 'folder',
      directory: props.directory,
      name:'',
      url:''
    };
  }

  render() {
    return (
      <>
        {this.props.openRegistlayer &&
          <div className="regist_bookmark_layer">
            <div className="title">북마크 등록</div>
            <div className="bookmark_data">
              <div className="data">구분</div>
              <div className="data_value">
                <div className={"type_button " + (this.state.type === "folder" ? "active" : "")} onClick={() => this.setState({type:'folder'})}>폴더</div>
                <div className={"type_button " + (this.state.type === "link" ? "active" : "")} onClick={() => this.setState({type:'link'})}>링크</div>
              </div>
            </div>
            <div className="bookmark_data">
              <div className="data">위치</div>
              <div className="data_value">{this.props.directoryName}</div>
            </div>
            <div className="bookmark_data">
              <div className="data">이름</div>
              <div className="data_value"><input type="text"/></div>
            </div>
            <div className="bookmark_data">
              <div className="data">URL</div>
              <div className="data_value"><input type="text" disabled={this.state.type === 'folder'}/></div>
            </div>
            <div>
              <div className="layer_button" onClick={() => this.props.closeRegistLayer()}>취소</div>
              <div className="layer_button" onClick={() => this.props.closeRegistLayer()}>저장</div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default RegistBookMark;