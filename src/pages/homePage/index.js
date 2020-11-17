import React, { Component } from "react";
import "./homePage.styles.scss";
import DirectoryMenu from "../../component/directory";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <DirectoryMenu></DirectoryMenu>
      </div>
    );
  }
}

export default HomePage;
