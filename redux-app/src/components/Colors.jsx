import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Colors() {
    const color=useSelector(store=>store.newone)
    const dispatch=useDispatch()
    const [textColor, settextColor] = useState('')
    const [bgColor, setbgcolor] = useState({
        red: 0,
        blue: 0,
        green: 0
    })
    document.body.style.backgroundColor=`rgb(${color.bgColor.red},${color.bgColor.green},${color.bgColor.blue})`
    return (
        <>
            <div className='container-fluid d-flex justify-content-center  mt-auto mr-auto'>
                <input type="text" className='form-control-success fs-5' placeholder="enter a color name" style={{
                    width: '20%'
                }} onChange={(e) => settextColor(e.target.value)} />
                <button className='btn btn-info border-2 ' onClick={()=>dispatch({type:'text',payload:textColor})}
                >Change color</button>
            </div>
            <br />
            <h1 className='text-center' style={{
                color: color.textColor
            }}>Example Text</h1>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                RED<input type='number' className='form-control' style={{
                    width: '20%'
                }} onChange={e => setbgcolor({ ...bgColor, red: e.target.value })}

                />
                BLUE<input type='number' className="form-control" style={{
                    width: '20%'
                }} onChange={e => setbgcolor({ ...bgColor, blue: e.target.value })} />
                GREEN<input type='number' className="form-control" style={{
                    width: '20%'
                }}
                    onChange={e => setbgcolor({ ...bgColor, green: e.target.value })} />

            </div><br />
            <button style={{
                padding: '10px 10px',
               marginLeft:'42%'
            }} className='btn btn-danger' onClick={()=>dispatch({type:'colorbackground',payload:bgColor})}>Change the background color</button>
        </>
    )
}

export default Colors