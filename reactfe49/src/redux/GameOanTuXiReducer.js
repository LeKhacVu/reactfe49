

const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/game_oan_xu_xi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/game_oan_xu_xi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/game_oan_xu_xi/bao.png', datCuoc: true }

    ],
    ketQua: "I'm, iron man i love you 3000",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/game_oan_xu_xi/keo.png' }


}
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;