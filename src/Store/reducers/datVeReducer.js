import SeatInfo from "../../Components/BaiTapDatVe/SeatInfo";

const DEFAULT_STATE = {
  danhSachGheDangDat: [],
};

export const datVeReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GHE_DANG_DAT": {
      let danhSachGheCapNhat = [...this.state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.soGhe === ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(ghe);
      }
      state.danhSachGheDangDat = danhSachGheCapNhat;

      return { ...state };
    }

    default:
      return state;
  }
};
