import React, { Component } from "react";
import Screen from "./Screen";
import "./BaiTapDatVe.css";
import SeatInfo from "./SeatInfo";

export default class Home extends Component {
  state = {
    danhSachGheDangDat: [],
  };

  gheDangDat = (ghe) => {
    let danhSachGheCapNhat = [...this.state.danhSachGheDangDat];

    let index = danhSachGheCapNhat.findIndex(
      (gheDD) => gheDD.soGhe === ghe.soGhe
    );

    if (index !== -1) {
      danhSachGheCapNhat.splice(index, 1);
    } else {
      danhSachGheCapNhat.push(ghe);
    }

    this.setState({
      danhSachGheDangDat: danhSachGheCapNhat,
    });
  };

  render() {
    return (
      <div id="home">
        <div className="row pt-3">
          <div className="col-lg-7">
            <Screen
              gheDangDat={this.gheDangDat}
              danhSachGheDangDat={this.state.danhSachGheDangDat}
            />
          </div>

          <div className="col-lg-5">
            <SeatInfo />
          </div>
        </div>
      </div>
    );
  }
}
