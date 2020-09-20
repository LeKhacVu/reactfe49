
const mangXucXac = [
    { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
    { ma: 2, hinhAnh: './img/Game_Xuc_Xac/2.png' },
    { ma: 3, hinhAnh: './img/Game_Xuc_Xac/3.png' },
    { ma: 4, hinhAnh: './img/Game_Xuc_Xac/4.png' },
    { ma: 5, hinhAnh: './img/Game_Xuc_Xac/5.png' },
    { ma: 6, hinhAnh: './img/Game_Xuc_Xac/6.png' }
]

const stateDefault = {
    banChon: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
        { ma: 3, hinhAnh: './img/Game_Xuc_Xac/3.png' },
        { ma: 6, hinhAnh: './img/Game_Xuc_Xac/6.png' }
    ]
}

export const gameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaChon;
        }
        case 'PLAY_GAME': {
            //Tao ra 3 vien xuc xac ngau nhien add vao mang xuc xac ngau nhien
            let mangXucXacNgauNhien = [];
            //Thuc hien random 3 lan de tao ra 3 vien xuc xac ngau nhien dua vao mang
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                //Tu ngau nhien tao ra xuc xac ngau nhien
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            //Cap nhat lai state.mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;
            //Cap nhat so ban choi
            state.tongSoBanChoi += 1;
            //Tinh diem tu mang xuc xac ngau nhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xxnn, index) => {
                return tongDiem += xxnn.ma;
            }, 0);
            //So sanh tongDiem
            //Neu tong diem lon hon 9 va banChon = true => thang'
            //Hoac neu  tong diem <= 9 va banChon = false => thua 
            if ((tongDiem > 9 && state.banChon) || (tongDiem <= 9 && !state.banChon)) {
                state.soBanThang += 1;
            }
            return { ...state };
        }
    }
    return { ...state };
}
