import React, { Component } from "react";
import "./app.scss";
import image from "./images/3.jpg";
import image2 from "~/images/mic.png";
class App extends Component {
  componentDidMount() {
    let element = document.getElementById("box2");
    let myImage = new Image();
    myImage.src = image;
    element.appendChild(myImage);
    let element2 = document.querySelector(".box3");
    let myImage2 = new Image();
    myImage2.src = image2;
    element2.appendChild(myImage2);
  }
  render() {
    console.log(`123123`, 123123);
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
