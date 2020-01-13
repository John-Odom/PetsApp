import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {connect} from 'react-redux'
 
class DemoCarousel extends Component {
    render() {
        const mapPhotos =() =>{
            let photos = []
            for(let i=0; i<this.props.chosenDog.photos.length; i++){
                photos.push(
                    <div class = 'image-container'>
                        <img src={this.props.chosenDog.photos[i].large} />
                <p className="legend"><b>{this.props.chosenDog.name}</b> - Photo {i+1}/{this.props.chosenDog.photos.length}</p>
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