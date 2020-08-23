import React from 'react';
import Form from "./Form";
import CardList from "./CardList";

import "./scss/global.scss";

import "./scss/App.scss";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  state = {
    profiles: [],
  };
  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }

  render() {
    return (
      <div>
        <div className="base">
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;