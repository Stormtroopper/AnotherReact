import React, { useContext } from 'react'
import '../App.css'
import studentdata from '../context/StudentContext'
function Courses() {
    let std = useContext(studentdata)
    return (
        <>
            <h1 className='text-muted text-center px-3' id='c-id'>

                Course is taken by {std.name} from {std.address}
                
            </h1>
        </>
    )
}

export default Courses