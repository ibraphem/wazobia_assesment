import { combineReducers } from 'redux';
import userSlice from './userSlice';
import itemSlice from './itemSlice';
import modalSlice from './modalSlice';

const combinedSlices = combineReducers({
    user: userSlice,
    items: itemSlice,
    modal: modalSlice
});

export default combinedSlices;
