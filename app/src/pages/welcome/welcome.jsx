import React from "react";
import "./welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome">
        <h1 className="header">
          Thank you for trying out the secure-electron-template!
        </h1>
        <div>
          Hello World
        </div>
      </div>
    );
  }
}

export default Welcome;
