import React, { Component } from "react";

import { connect } from "react-redux";

import seatsData from "../../Data/danhSachGhe.json";
import { createAction } from "../../Store/Actions";
import { GHE_DANG_DAT } from "../../Store/Actions/type";

class Seat extends Component {
  renderSeatMap = () => {
    return this.props.gheInfo.map((item, index) => {
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
                      onClick={() =>
                        this.props.dispatch(createAction(GHE_DANG_DAT, ghe))
                      }
                      // onClick={() => this.props.gheDangDat(ghe)}
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

const mapStateToProps = (state) => {
  return { ...state.datVeReducer };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     gheDangDat: (ghe) => {
//       dispatch({
//         type: "GHE_DANG_DAT",
//         payload: ghe,
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(Seat);
