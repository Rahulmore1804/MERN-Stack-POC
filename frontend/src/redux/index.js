import changeList from './ListState';
import changeNumber from './incNum';
import savedata from './ListState'
import syncData from './dataStack';
import syncData2 from './dataStack2';
import syncData11 from './cart';


import {combineReducers} from 'redux';

const reducers = combineReducers({
  changeList,
  changeNumber,
  savedata,
  syncData,
  syncData2,
  syncData11
  
  

});

export default reducers;
