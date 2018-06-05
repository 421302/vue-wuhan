

import * as types from './mutation-types';

const mutations = {

  [types.LOG_STATUS](state,logStatus){
    localStorage.setItem("logStatus", JSON.stringify(logStatus));
    state.logStatus = logStatus;
  },

  [types.INPUT_VAL](state,data){
    let key = Object.keys(data)[0];
     state.inputVal[key] = data[key];
  },
  [types.INPUT_VALSHOW](state,data){
    let key = Object.keys(data)[0];
    state.inputValShow[key] = data[key];
    console.log(state.inputValShow[key]);
  },



};

export default mutations
