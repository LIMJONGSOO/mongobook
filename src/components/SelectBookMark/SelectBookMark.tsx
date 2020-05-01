import React, {Component} from 'react';
import Header from './components/Header/Header';
import ButtonArea from './components/ButtonArea/ButtonArea';
import BookMarkList from './components/BookMarkList/BookMarkList';
import RegistBookMark from './components/RegistBookMark/RegistBookMark';
import Footer from './components/Footer/Footer';
import './SelectBookMark.scss';

class SelectBookMark extends Component {
  state : {
    openRegistlayer: boolean;
    directory: string;
    directoryName: string;
    bookmarkListType: string;
    bookmarkList: Array<{
      type:string;
      title:string;
      link:string;
      og_img:string;
      og_title:string;
      og_desc:string;
    }>,
  }

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      openRegistlayer: false,
      directory: '',
      directoryName: '',
      bookmarkListType: 'list',
      bookmarkList: [],
    }
  }

  componentDidMount() {
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
          bookmarkList={this.state.bookmarkList}/>
        <Footer />
      </>
    )
  };
}

export default SelectBookMark;