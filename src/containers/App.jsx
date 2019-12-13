import React, { Component } from 'react';

import GoogleConnect  from "./GoogleLogin/GoogleConnect.jsx";

class App extends Component {
  constructor(props) {
     super(props);
   }
   render() {
    return (
      <div><GoogleConnect mode = "login"/></div>
    );
  }
}

export default App
