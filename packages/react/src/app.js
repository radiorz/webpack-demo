import React, { Component } from "react";
import "./app.scss";
import image from "./images/1.jpg";
class App extends Component {
  componentDidMount() {
    let element = document.getElementById("box2");
    let myImage = new Image();
    myImage.src = image;
    element.appendChild(myImage);
  }
  render() {
    return (
      <div className="box">
        <div className="box1">my project </div>
        <div id="box2"></div>
        <div className="box3">my project </div>
        <div className="box4">my project </div>
      </div>
    );
  }
}
export default App;
