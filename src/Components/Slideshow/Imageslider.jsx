import React from 'react'
import { useState , useEffect } from 'react'
import { SliderData } from './Sliderdata'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Imageslider = ({slides}) => {

    const [current , setCurrent] = useState(0)
    const length = slides.length
    const transitionDelay = 5000;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 :current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)

    }

    useEffect(() => {
        const timerId = setInterval(() => {
          setCurrent((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
        }, transitionDelay);
    
        return () => {
          clearInterval(timerId);
        };
      }, [current, length]);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }


    
  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {SliderData.map((slide,index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="goruntu yok" className='image'/>)}
                
            </div>
        )
    })}
    </section>
  )
}

export default Imageslider