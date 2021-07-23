const reducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.payload;
    case 'ADD_POST':
      return state.concat([ ...state, action.payload]);
    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.payload);
    default:
      return state;
  }
}
export default reducer;