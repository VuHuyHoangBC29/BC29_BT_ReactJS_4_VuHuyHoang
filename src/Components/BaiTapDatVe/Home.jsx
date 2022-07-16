import React, { Component } from "react";
import Screen from "./Screen";
import "./BaiTapDatVe.css";
import SeatInfo from "./SeatInfo";

export default class Home extends Component {
  // state = {
  //   danhSachGheDangDat: [],
  // };

  // gheDangDat = (ghe) => {
  //   let danhSachGheCapNhat = [...this.state.danhSachGheDangDat];

  //   let index = danhSachGheCapNhat.findIndex(
  //     (gheDD) => gheDD.soGhe === ghe.soGhe
  //   );

  //   if (index !== -1) {
  //     danhSachGheCapNhat.splice(index, 1);
  //   } else {
  //     danhSachGheCapNhat.push(ghe);
  //   }

  //   this.setState({
  //     danhSachGheDangDat: danhSachGheCapNhat,
  //   });
  // };

  // datVe = (arr) => {
  //   if (arr === false) {
  //     alert("Vui lòng chọn ghế!");
  //   } else if (window.confirm("Xác nhận đặt vé?")) {
  //     console.log(arr);
  //   }
  // };

  render() {
    return (
      <div id="home">
        <div id="home_bg"></div>
        <div className="row pt-3">
          <div className="col-sm-12 col-lg-12 col-xl-8">
            <Screen
            // gheDangDat={this.gheDangDat}
            // danhSachGheDangDat={this.state.danhSachGheDangDat}
            />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <SeatInfo
            // danhSachGheDangDat={this.state.danhSachGheDangDat}
            />
          </div>
        </div>
      </div>
    );
  }
}
