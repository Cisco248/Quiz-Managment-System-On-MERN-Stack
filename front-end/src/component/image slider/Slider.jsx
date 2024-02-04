import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages} from './slideImages'
import './Slider.css'

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius : '30px',
    height: '400px'
  }


const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((image, index)=> (
            <div key={index} className='slider_layer'>
              <div style={{ ...divStyle, 'backgroundImage': `url(${image.url})` }}>
                <span className='spanStyle'>{image.caption}</span>
                <span className='descriptionStyle'>{image.description}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow