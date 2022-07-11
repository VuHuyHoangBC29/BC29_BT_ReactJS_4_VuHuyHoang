import React, { Component } from "react";
import SeatTable from "./SeatTable";

export default class SeatInfo extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 id="infoIntro" className="text-white">
          DANH SÁCH GHẾ BẠN CHỌN
        </h1>

        <div id="seatType" className="pl-5">
          <div className="text-left" style={{ marginLeft: 60 }}>
            <div
              style={{
                display: "inline-block",
                width: 45,
                height: 35,
                borderRadius: 5,
                background: "orange",
                border: "3px solid orange",
                marginRight: 5,
              }}
            ></div>
            <span className="text-white">Ghế đã đặt</span>
          </div>

          <div className="text-left" style={{ marginLeft: 60 }}>
            <div
              style={{
                display: "inline-block",
                width: 45,
                height: 35,
                borderRadius: 5,
                background: "rgb(109, 238, 109)",
                border: "3px solid rgb(109, 238, 109)",
                marginRight: 5,
              }}
            ></div>
            <span className="text-white">Ghế đang chọn</span>
          </div>

          <div className="text-left" style={{ marginLeft: 60 }}>
            <div
              style={{
                display: "inline-block",
                width: 45,
                height: 35,
                borderRadius: 5,
                background: "white",
                border: "3px solid orange",
                marginRight: 5,
              }}
            ></div>
            <span className="text-white">Ghế chưa đặt</span>
          </div>
        </div>

        <div className="pl-5 mt-5">
          <SeatTable />
        </div>
      </div>
    );
  }
}
