import React, { Component } from "react";

import { connect } from "react-redux";
import { createAction } from "../../Store/Actions";
import { XAC_NHAN_DAT_VE } from "../../Store/Actions/type";
import { HUY_GHE_DANG_DAT } from "../../Store/Actions/type";

class SeatTable extends Component {
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((ele) => {
                return (
                  <tr style={{ color: "orange" }} key={ele.soGhe}>
                    <td>{ele.soGhe}</td>
                    <td>{ele.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(
                            createAction(HUY_GHE_DANG_DAT, ele)
                          );
                        }}
                        style={{
                          color: "red",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        X
                      </button>
                    </td>
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
                  .toLocaleString()}{" "}
                VNĐ
              </td>
            </tfoot>
          </table>
        </div>
        <button
          onClick={() => this.props.dispatch(createAction(XAC_NHAN_DAT_VE))}
          // onClick={() => this.props.xacNhanDatVe()}
          className="btn btn-success"
        >
          ĐẶT VÉ
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.datVeReducer };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     xacNhanDatVe: () => {
//       dispatch({
//         type: "XAC_NHAN_DAT_VE",
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(SeatTable);
