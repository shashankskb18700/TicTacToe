import { combineReducers } from 'redux';

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

let distin = 0;
let winner = ""
let nextMove = "";
let nextChecker = 0;

///player changer is not working because after distin value is changed it will not running the reducers agian



const Marker = (state = arr, action) => {
  console.log("Marker")
  switch (action.type) {
    case 'SIGN_INDEX':
      const val = state.indexOf(action.payload);
      if (distin % 2 === 0) {
        arr[val] = "X";
      } else {
        arr[val] = "O";
      }
      distin += 1; 
      
      return [...arr];
    case 'RESET':
      arr = action.payload;
      state = action.payload;
      distin = 0;
      
      return [...state];

    default:
      return state;
  }
  
}
const Next = (state = arr, action= 'ab') => {
  if (action.type === 'RESET') {
    console.log('next' + action.type);
    nextChecker = 0;
    nextMove = "Player 1 has to play next move";
    return nextMove;
    }
  
   if (nextChecker % 2 === 0) {
      nextMove = "Player 1 has to play next move";
      nextChecker += 1;
      return nextMove;
    } else {
      nextChecker += 1;
      nextMove = " Player 2 has to play next move";
      return nextMove;
    }
   
};
  


    

export default combineReducers({
  win: winner,
  Next:Next,
  dashboard: arr,
  selectedBlock: Marker,
})
