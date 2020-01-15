import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {connect} from 'react-redux'
 
class DemoCarousel extends Component {
    render() {
        const dog = this.props.chosenDog
        const mapPhotos =() =>{
            let photos = []
            for(let i=0; i<dog.photos.length; i++){
                photos.push(
                    <div className='image-container'>
                        <img className='dog-page-img' src={dog.photos[i].large} />
                        <p className="legend"><b>{dog.name}</b> - Photo {i+1}/{dog.photos.length}</p>
                    </div>
                )
            }
            return photos
          }

        return (
            <Carousel>
                {mapPhotos()}
            </Carousel>
        );
    }
};

const mapStateToProps = state => {
    return({
        chosenDog: state.chosenDog
    })
}

export default connect(mapStateToProps)(DemoCarousel);