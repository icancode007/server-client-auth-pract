import React, { Component } from 'react';
import NavigationBar from  './NavigationBar';
import FlashMessages from  './FlashMessages';

class App extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <FlashMessages />
      </div>
    )
  }
}

export default App;
