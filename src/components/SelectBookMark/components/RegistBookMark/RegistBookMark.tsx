import React, {Component} from 'react';
import './RegistBookMark.scss';
const axios = require("axios");
const cheerio = require("cheerio");

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

  crawling() {
    const url = '';
    this.getHtml(url)
      .then(res => console.log(res));
  }

  getHtml = async (url: string) => {
    try {
      return await axios.get("https://192.168.219.192:4000/api/board");
    } catch (error) {
      console.error(error);
    }
  };



  render() {
    return (
      <>
        {this.props.openRegistlayer &&
          <div className="regist_bookmark_layer">
            <div className="title">북마크 등록1</div>
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
              <div className="layer_button" onClick={() => this.crawling()}>저장</div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default RegistBookMark;