import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
 
class DogCarousel extends React.Component {
  render() {
      const dog = this.props.chosenDog

      const mapPhotos =() =>{
        let photos = []
        for(let i=0; i<dog.photos.length; i++){
            photos.push(<Slide index={i} key={i}><Image src={dog.photos[i].large}/></Slide>)
        }
        return photos
      }
      
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={dog.photos.length}
      >
        <Slider className='carousel-slider'> 
            {mapPhotos()}
        </Slider>
        <ButtonBack className='back-button'>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  };
};

const mapStateToProps = state => {
    return({
        chosenDog: state.chosenDog
    })
}

export default connect(mapStateToProps)(DogCarousel);