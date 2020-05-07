import React, {Component} from 'react';
import Header from './components/Header/Header';
import ButtonArea from './components/ButtonArea/ButtonArea';
import BookMarkList from './components/BookMarkList/BookMarkList';
import RegistBookMark from './components/RegistBookMark/RegistBookMark';
import Footer from './components/Footer/Footer';
import axios from "axios";
import './SelectBookMark.scss';

export interface BookMarkData  {
  date?: any;
  is_edited?: boolean;
  type?:string;
  name?:string;
  upperDirectory?:string;
  url?: string;
  __v?: number;
  _id?:string;
  og_title?:string;
  og_description?:string;
  og_image?:string;
};

class SelectBookMark extends Component {
  state : {
    openRegistlayer: boolean;
    directory: string;
    directoryName: string;
    bookmarkListType: string;
    bookmarkList: Array<BookMarkData>,
  }

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      openRegistlayer: false,
      directory: '0',
      directoryName: '',
      bookmarkListType: 'list',
      bookmarkList: [],
    }
  }

  componentDidMount() {
    this.searchBookMark();
  }

  searchBookMark = async () => {
    try {
      const bookmarkList = await axios.get("https://192.168.219.192:4000/api/bookmark/"+this.state.directory);
      if (bookmarkList && bookmarkList.data) {
        this.setState({bookmarkList: bookmarkList.data});
      }
    } catch (error) {
      console.error(error);
    }
  }

  openRegistLayer = () => {
    this.setState({openRegistlayer: true});
  }

  closeRegistLayer = () => {
    this.setState({openRegistlayer: false});
  }

  changeListType = (type:string) => {
    this.setState({bookmarkListType: type});
  }

  changedirectory = (directory:string | undefined, directoryName:string | undefined) => {
    this.setState({directory, directoryName: this.state.directoryName + '/' + directoryName}, () => {
      this.searchBookMark();
    });
  }

  render() {
    return (
      <>
        <Header />
        <ButtonArea 
          openRegistlayer={this.state.openRegistlayer}
          bookmarkListType={this.state.bookmarkListType} 
          directory={this.state.directory}
          openRegistLayer={this.openRegistLayer}
          changeListType={this.changeListType}/>
        <RegistBookMark 
          openRegistlayer={this.state.openRegistlayer}
          directory={this.state.directory}
          directoryName={this.state.directoryName}
          closeRegistLayer={this.closeRegistLayer}/>
        <BookMarkList 
          directory={this.state.directory}
          directoryName={this.state.directoryName}
          bookmarkListType={this.state.bookmarkListType}
          bookmarkList={this.state.bookmarkList}
          changedirectory={this.changedirectory}/>
        <Footer />
      </>
    )
  };
}

export default SelectBookMark;