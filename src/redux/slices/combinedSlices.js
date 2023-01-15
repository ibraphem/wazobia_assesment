import { combineReducers } from 'redux';
import userSlice from './userSlice';


const combinedSlices = combineReducers({
    user: userSlice,
});

export default combinedSlices;
