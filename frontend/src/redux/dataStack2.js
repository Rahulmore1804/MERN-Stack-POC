const initialState = {
    alldata2 : [{name : "sfvjb"}]
};

const syncData2 = (state= initialState,action)=>{

    switch(action.type){
        case "syncDataAlla1" :
            return {alldata2 : [...action.payload]}
            default:
                return state;
        }
    
}
export default syncData2;

