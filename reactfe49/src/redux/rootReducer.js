//Quan ly tat ca state cua ung dung
import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
export const rootReducer = combineReducers({
    //Khai bao cac state cua ung dung
    GioHangReducer:GioHangReducer,
    
})