import SeatInfo from "../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  gheInfo: SeatInfo,
  danhSachGheDangDat: [],
};

export const datVeReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "GHE_DANG_DAT": {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.soGhe === payload.soGhe
      );

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(payload);
      }
      state.danhSachGheDangDat = danhSachGheCapNhat;

      return { ...state };
    }

    case "HUY_GHE_DANG_DAT": {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.soGhe === payload.soGhe
      );

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheCapNhat;

      return { ...state };
    }

    case "XAC_NHAN_DAT_VE": {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let gheInfoCapNhat = [...state.gheInfo];
      if (window.confirm("Xác nhận đặt vé?")) {
        gheInfoCapNhat.forEach((ele, index) => {
          if (index !== 0) {
            ele.danhSachGhe.forEach((item, index) => {
              danhSachGheCapNhat.forEach((ghe) => {
                if (item.soGhe === ghe.soGhe) {
                  item.daDat = true;
                }
              });
            });
          }
        });
      }

      danhSachGheCapNhat = [];
      state.danhSachGheDangDat = danhSachGheCapNhat;

      state.gheInfo = gheInfoCapNhat;
      return { ...state };
    }

    default:
      return state;
  }
};
