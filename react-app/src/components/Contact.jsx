import React, { useEffect, useRef, useState } from 'react'
import Reducer from './Reducer'
function Contact() {
  const [val,setVal]=useState(0)
  const [val2,setVal2]=useState(0)

  const newref=useRef();
  useEffect(()=>{
    //this method exceutes after every state/props dependency-ComponentDidUpdate
    console.log('useEffect');
    newref.current.select()
  },[val])
  useEffect(()=>{
    //this method exceutes after every render
    console.log('First useEffect');
  })
  useEffect(()=>{
    //this method exceutes after the intial render-componentDidMount
    console.log('Initial useEffect');
  },[])
  useEffect(()=>{
    let interval=setTimeout(()=>{
      setVal2(()=>val2*100)
    },500)
    return()=>{
      console.log('This is a clean-up function');
      clearInterval(interval)
    }
  })
  return (
    <div className='text-muted' style={{
        fontSize:"40px",
        fontWeight:"500",
        textAlign:'center'
    }}>
<button className='btn btn-danger' onClick={()=>setVal(prev=>prev+1)}>Click Me </button>      
<input className='form-control text-center fs-2' type="text" ref={newref} value={val}/>
<input className='form-control text-center fs-2' type="text"  value={val2}/>

    {val===0?null:<Reducer/>}
    </div>
  )
}

export default Contact