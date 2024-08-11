const initialState = {
    alldata1 : [{name : "sfvjb"}]
};

const syncData = (state= initialState,action)=>{

    switch(action.type){
        case "syncDataAll1" :
            return {alldata1 : [...action.payload]}
            default:
                return state;
        }
    
}
export default syncData;
