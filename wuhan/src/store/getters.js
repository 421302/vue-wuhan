// export const logStatus = state => state.logStatus;

export const logStatus = (state)=>{
  let localData = localStorage.getItem('logStatus');
  if (localData !== null) {
    let nowTime = new Date().getTime();
    if(nowTime > JSON.parse(localData).time){
      localStorage.removeItem('logStatus');

    }else{
      state.logStatus = JSON.parse(localStorage.getItem('logStatus'));
    }
  }
  return state.logStatus
};

export const inputVal = state => state.inputVal;

export const inputValShow = state => state.inputValShow;
