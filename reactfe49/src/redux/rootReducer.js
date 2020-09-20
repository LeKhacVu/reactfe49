//Quan ly tat ca state cua ung dung
import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
import {gameXucXacReducer} from './GameXucXacReducer';
import QuanLySinhVienReducer from './QuanLySinhVienReducer';
import BaiTapOanTuXiReducer from './GameOanTuXiReducer'
export const rootReducer = combineReducers({
    //Khai bao cac state cua ung dung
    GioHangReducer:GioHangReducer,
    gameXucXacReducer:gameXucXacReducer,
    QuanLySinhVienReducer,
    BaiTapOanTuXiReducer:BaiTapOanTuXiReducer,

})