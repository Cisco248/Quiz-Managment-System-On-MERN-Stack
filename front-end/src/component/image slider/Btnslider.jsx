import Style from './Slider.module.css'
import LeftArrow from './left.svg'
import RightArrow from './Right.svg'

function Btnslider({direction, moveSlide}) {
  return (
    <button className={Style.btn_slide_button}>
        <img src={RightArrow} />
        <img src={LeftArrow} />
    </button>
  )
}

export default Btnslider
