import React, { Component } from "react";

export default class SeatTable extends Component {
  render() {
    return (
      <div>
        <div>
          <table
            className="table text-white text-left"
            style={{
              border: "2px solid white",
              width: "80%",
              marginLeft: 60,
            }}
          >
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((ele) => {
                return (
                  <tr style={{ color: "orange" }} key={ele.soGhe}>
                    <td>{ele.soGhe}</td>
                    <td>{ele.gia}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <td>Tổng tiền:</td>
              <td>
                {this.props.danhSachGheDangDat
                  .reduce((previousValue, currentValue) => {
                    return (previousValue += currentValue.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tfoot>
          </table>
        </div>
        <button className="btn btn-success">ĐẶT VÉ</button>
      </div>
    );
  }
}
