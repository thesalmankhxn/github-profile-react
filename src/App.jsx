import React from 'react';
import Form from "./Form";
import CardList from "./CardList";

import "./scss/global.scss";

import "./scss/App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="base">
          {this.props.title}
        </div>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;