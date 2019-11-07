import React, { Component } from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContex'
import LanguageSelector from './LanguageSelector'

class App extends Component {

  state = { language: 'english'}

  onLanguageChange = language => {
    this.setState({language})
  }

  render() {
    return (
      <div className="ui container">
          <LanguageSelector onLanguageChange={this.onLanguageChange}/>

          <ColorContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
                <UserCreate/>
            </LanguageContext.Provider>
          </ColorContext.Provider>
          

          
          

      </div>
    );
  }
}
//<LanguageContext.Provider value='english'>
          ///  <UserCreate/>
          //</LanguageContext.Provider>

          //<UserCreate/>
// każdy z LanguageContext uzywa osobnego pipeline dlaego widzumy różne wartości
export default App;