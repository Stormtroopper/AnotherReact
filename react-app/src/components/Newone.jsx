import React from 'react'
import Images from './Images'
function Newone() {
    return (
        <>
           <h1 className='text-muted text-center'>
            Check it Out            
            <Images url={'https://picsum.photos/v2/list'} 
            page={"1"}
            limit={"10"}
            />
            </h1>
        </>
    )
}

export default Newone