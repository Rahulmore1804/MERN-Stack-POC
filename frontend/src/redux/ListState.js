const initialState = {
    mainList: ["as"],
    alldata: ["z"],
    pageNum: 1,
  };
  
  const changeList = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE":
        return { ...state, mainList: [...state.mainList, ...action.payload] };
      case "INC":
        state.pageNum = state.pageNum + 1;
        return state.pageNum;
      default:
        return state;
    }
  };
  
  export const savedata = (state = initialState, action) => {
    // console.log('dewxexercre')
    switch (action.type) {
      case "saveData":
        return {
          ...state,
          alldata: [...action.payload],
        };
      default:
        return state;
    }
  };
  
  export default changeList;
  
  