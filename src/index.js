import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MainContainer from "./containers/MainContainer";

class App extends Component {
    render() {
      return (
        <div >
          <MainContainer />
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
