const initialState =[]

const reducer = (state=initialState,action)=>{
    switch(action.type) {
        case 'add':
          return state.concat([action.values]);
        default:
          return state;

}
}

export default reducer;