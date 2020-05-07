import React, {Component} from 'react';
import './RegistBookMark.scss';
import axios from "axios";

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

  insertBookMark = async () => {
    try {
      const param = {
        type: this.state.type,
        name: this.state.name,
        directory: this.state.directory ? this.state.directory : '0',
        url: this.state.url
      }
      return await axios.post("https://192.168.219.192:4000/api/bookmark", param)
                    .then(() => this.props.closeRegistLayer());
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        {this.props.openRegistlayer &&
          <div className="regist_bookmark_layer">
            <div className="title">북마크 등록1</div>
            <div className="bookmark_data">
              <div className="data">구분</div>
              <div className="data_value">
                <div className={"type_button " + (this.state.type === "folder" ? "active" : "")} onClick={() => this.setState({type:'folder', url:''})}>폴더</div>
                <div className={"type_button " + (this.state.type === "link" ? "active" : "")} onClick={() => this.setState({type:'link'})}>링크</div>
              </div>
            </div>
            <div className="bookmark_data">
              <div className="data">위치</div>
              <div className="data_value">{this.props.directoryName}</div>
            </div>
            <div className="bookmark_data">
              <div className="data">이름</div>
              <div className="data_value"><input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/></div>
            </div>
            <div className="bookmark_data">
              <div className="data">URL</div>
              <div className="data_value"><input type="text" disabled={this.state.type === 'folder'} value={this.state.url} onChange={(e) => this.setState({url: e.target.value})}/></div>
            </div>
            <div>
              <div className="layer_button" onClick={() => this.props.closeRegistLayer()}>취소</div>
              <div className="layer_button" onClick={() => this.insertBookMark()}>저장</div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default RegistBookMark;