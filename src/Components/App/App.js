import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import data from "../../Static/glasto-data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
  }

  render() {
    return <SearchBox data={this.data} />;
  }
}

export default App;
