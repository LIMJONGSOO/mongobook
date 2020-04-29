import React, {Component} from 'react';
import Header from './components/Header/Header';
import ButtonArea from './components/ButtonArea/ButtonArea';
import BookMarkList from './components/BookMarkList/BookMarkList';
import Footer from './components/Footer/Footer';
import './SelectBookMark.scss';

class SelectBookMark extends Component {
  state = {}

  componentDidMount() {
  }
  
  render() {
    return (
      <>
        <Header />
        <ButtonArea />
        <BookMarkList />
        <Footer />
      </>
    )
  };
}

export default SelectBookMark;