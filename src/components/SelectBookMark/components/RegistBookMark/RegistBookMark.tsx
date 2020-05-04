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
    const url = 'https://www.naver.com';
    this.getHtml(url)
      .then(html => {
        let ogDatas = {
            title : '',
            description: '',
            image: ''
        };
        console.log(html);
        const $ = cheerio.load(html);
        const $bodyList = $("meta");

        $bodyList.each((i: any,elem: any) => {
            if(String($bodyList[i].attr('property')) === 'og:title') {
                ogDatas.title = String($bodyList[i].attr('content'));
            } else if(String($bodyList[i].attr('property')) === 'og:description') {
                ogDatas.description = String($bodyList[i].attr('content'));
            } else if(String($bodyList[i].attr('property')) === 'og:image') {
                ogDatas.image = String($bodyList[i].attr('content'));
            }
        });

        const data = ogDatas;
        return data;
      })
      .then(res => console.log(res));
  }

  getHtml = async (url: string) => {
    try {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      return script;
    } catch (error) {
      console.error(error);
    }
  };



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
              <div className="layer_button" onClick={() => this.crawling()}>저장</div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default RegistBookMark;