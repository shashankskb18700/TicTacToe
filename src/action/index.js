
export const Sindex = text => {
  return {
    type: "SIGN_INDEX",
    payload: text,
  };
}
  

export const Reset = arr => {
  return {
    type: "RESET",
    payload: arr
  }
}
  