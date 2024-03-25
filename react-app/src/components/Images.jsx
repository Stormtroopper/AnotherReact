import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import img_1 from '../assets/img-1.avif'
import img_2 from '../assets/img-2.avif'
import img_3 from '../assets/img-3.avif'
import '../App.css'
const img_arr = [img_1, img_2, img_3]
function Images() {

    const [currentindex, Setcurrentindex] = useState(0);
    const [images, setImages] = useState([]);
    // const [isCurrent,setisCurrent]=useState(false);
    const handleNext=()=>{
        Setcurrentindex((prev) => (prev - 1 + img_arr.length) % img_arr.length)
    }
    const handlePrevious=()=>{
        Setcurrentindex((prev) => (prev + 1) % img_arr.length)
    }
    return (
        <>
        
        <div className='image-slider text-center'>
            <TransitionGroup>
            <button className='btn btn-dark' onClick={handlePrevious}> Previous</button>
                <CSSTransition key={currentindex} timeout={90} classNames="fade">

                 <img src={img_arr[currentindex]} alt={`Slide ${currentindex}`} height={'200px'} width={'200px'} />

                </CSSTransition>
            <button className='btn btn-info' onClick={handleNext}>Next</button>
            </TransitionGroup>

        </div>
        </>
    )
}

export default Images