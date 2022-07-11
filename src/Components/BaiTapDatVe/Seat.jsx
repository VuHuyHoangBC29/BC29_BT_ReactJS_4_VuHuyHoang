import React, { Component } from "react";

import seatsData from "../../Data/danhSachGhe.json";

export default class Seat extends Component {
  renderSeatMap = () => {
    return seatsData.map((item, index) => {
      if (index === 0) {
        return (
          <tr key={index}>
            <td className="rowNumber">{item.hang}</td>
            <td>
              {item.danhSachGhe.map((ghe) => {
                return (
                  <td key={ghe.soGhe} className="p-3">
                    <button disabled className="rowNumber">
                      {ghe.soGhe}
                    </button>
                  </td>
                );
              })}
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td className="rowNumber">{item.hang}</td>
            <td>
              {item.danhSachGhe.map((ghe) => {
                let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
                let classGheDangDat = "";
                let indexGheDD = this.props.danhSachGheDangDat.findIndex(
                  (gheDD) => gheDD.soGhe === ghe.soGhe
                );
                if (indexGheDD !== -1) {
                  classGheDangDat = "gheDangDat";
                }

                return (
                  <td key={ghe.soGhe} className="p-3">
                    <button
                      onClick={() => this.props.gheDangDat(ghe)}
                      className={`ghe ${classGheDaDat} ${classGheDangDat}`}
                    >
                      {ghe.soGhe}
                    </button>
                  </td>
                );
              })}
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    return <div>{this.renderSeatMap()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
