import { useState } from "react"
import Style from './Slider.module.css'
import Btnslider from './Btnslider'
import Dataslider from "./Dataslider"

function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {

    }

    const prevSlide = () => {

    }

  return (
        <div className={Style.image_slider}>
            {Dataslider.map((obj, index) => {
                return (
                    <div key={obj.id}>
                        <img src={`/slider/img${index + 1}}.png`} />
                    </div>
                )
            })}
            <Btnslider moveSlide={nextSlide} direction={"next"} />
            <Btnslider moveSlide={prevSlide} direction={"prev"} />
        </div>
  )
}

export default Slider
