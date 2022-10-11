import React from 'react'
import { useReducer } from 'react';

const ACTIONS={
    INCRIMENT:"incriment",
    DECREIMENT:"decriment"
}

const reducer=(state ,action)=> {
    switch (action.type) {
        case ACTIONS.DECREIMENT:
            return {count : state.count-1}            
            
        case ACTIONS.INCRIMENT:
            return {count : state.count+1}                          
        default:
            return state;
    }
}
export const Usreducer = () => {
    const [state,dispacth]=useReducer(reducer,{count:0})
    const Subtract =()=>{
        dispacth({type :ACTIONS.DECREIMENT})

    }
    const Add =()=>{
        dispacth({type :ACTIONS.INCRIMENT})
    }
  return (
    <div>
        <button onClick={Subtract}>-</button>
        <span>{state.count}</span>
        <button onClick={Add}>+</button>
    </div>
  )
}
export default Usreducer;