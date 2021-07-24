const reducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.payload;
<<<<<<< HEAD
    case 'ADD_POST':
      return state.concat([ ...state, action.payload]);
    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.payload);
=======

    case 'ADD_POST':
      return state.concat([ ...state, action.payload]);

    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.payload);
      
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.payload ? {...post,editing:!post.editing}:post)
    
    case 'UPDATE_POST':
      return state.map((post)=>{
        if(post.id === action.payload) {
          return {
              ...post,
              title:action.data.newTitle,
              body:action.data.newBody,
              editing: !post.editing
          }
        } else return post;
      })  

>>>>>>> post-forms
    default:
      return state;
  }
}
export default reducer;