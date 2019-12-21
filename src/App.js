import React, { Component } from 'react';
import HeroGallery from './components/heroGallery';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  
  render() {
    return (
      <HeroGallery/>
    );
  }

}