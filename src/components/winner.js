

const Winn = ({ arr }) => {
  console.log(arr);
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    
    return `Winner : ${arr[0]}`;
  } else if(arr[3] === arr[4] && arr[4] === arr[5]){
    return `Winner : ${arr[3]}`;
  } else if (arr[6] === arr[7] && arr[7] === arr[8]) {
    return `Winner : ${arr[6]}`;
  }
    
  else if (arr[0] === arr[3] && arr[3] === arr[6]) {
    return ` Winner : ${arr[0]}`;
  } else if (arr[1] === arr[4] && arr[4] === arr[7]) {
    return `Winner : ${arr[1]}`;
  } else if (arr[2] === arr[5] && arr[5] === arr[8]) {
    return `Winner : ${arr[2]}`;
  }
    
  else if (arr[0] === arr[4] && arr[4] === arr[8]) {
    return `Winner : ${arr[0]}`;
  }else if (arr[2] === arr[4] && arr[4] ===arr[6]) {
    return `Winner : ${arr[2]}`;
  }
  
  else {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] !== 'X' && arr[i] !== 'O') {
        console.log('yet to be decided')
        return "Winner : YET TO BE DECIDED";
      }
    }
    console.log('draw');
    return "DRAW" ;
    
  }
}

export default Winn;