import React, { Component } from "react";
import Seat from "./Seat";

export default class Screen extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 id="intro" style={{ color: "orange" }}>
          ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN
        </h1>

        <div className="text-white">Màn hình</div>

        <div className="screen"></div>

        <div className="mt-3 pl-5">
          <Seat/>
        </div>
      </div>
    );
  }
}
