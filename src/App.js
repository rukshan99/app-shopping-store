import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Shared/Navigation/Header'
import Section from './Shared/Navigation/Section'
import {DataProvider} from './Products/components/Context'

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
