import React from 'react';
import { connect } from "react-redux";
import { Sindex , Reset } from '../action'


import Winn from './winner'

import './blocks.css';
const Board = props => {
  const hider = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  
  return (
    <div className="be">
      
      <div className="Move">
        {props.Move} 
        <br></br>
        <button onClick = {()=>props.Reset(hider)}>RESET</button>
      </div>
      <div className="ews">
        {console.log(props)}
        {props.value.map((a) => {
          if (hider.indexOf(a) > -1) {
            return (
              <div className="blocks" onClick={() => props.Sindex(a)}>
               
              </div>
            );
          } else {
            return (
              <div className="blocks" onClick={() => props.Sindex(a)}>
                <div className="rootLevel">{`${a}`}</div>
              </div>
            );
          }
          
        })}
      </div>
      <div className="wint">
        <Winn arr={props.value} />
        <div className="player">
          Player 1 is X <br></br>Player 2 is O
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    value: state.selectedBlock,
    Move: state.Next
  }
}


export default connect(mapStateToProps, { Sindex, Reset })(Board);



// (a !== 'a') || (a !== 'b') || (a !== 'c') || (a !== 'd') || (a !== 'e') || (a !== 'e') || (a !== 'f') || (a !== 'g') || (a !== 'h') || (a !== 'i')