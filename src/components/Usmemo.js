import React from 'react'
import { useState,useMemo } from 'react';
export const Usmemo = () => {
  const [number,setNumber]=useState(0)
  const [dark,setDark]=useState(false)
  const doubleNumber=useMemo(()=>{
    return slowNumber(number)
  }, [number])
const themeStyle={
  backgroundColor:dark?'black':'white',
  color:dark? 'white':'black',
}
  return (
    <>
    <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
    <button onClick={()=>setDark(prevdark=>!prevdark)}>toggle button</button>
    <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}
function slowNumber(num) {
  console.log('themeuploading')
  for (let i = 0; i < 1000000000; i++) {
    return num*2
  }
}
export default Usmemo;