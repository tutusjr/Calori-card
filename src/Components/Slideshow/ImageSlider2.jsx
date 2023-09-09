import React from 'react'
import { useState , useEffect } from 'react'
import { SliderData2 } from './SliderData2'
const Imageslider2 = ({slides}) => {

    const [current , setCurrent] = useState(0)
    const length = slides.length
    const transitionDelay = 5000;

   
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
        {SliderData2.map((slide,index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="goruntu yok" className='image ikinci'/>)}
                
            </div>
        )
    })}
    </section>
  )
}

export default Imageslider2