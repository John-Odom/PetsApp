
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
 
class FourPictureCarousel extends Component {
    render() {
        let dog=this.props.chosenDog
        console.log(dog)
        if(this.props.chosenDog){
        return (
            <Carousel>
                <div>
                    <img src={dog.photos[1]} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={dog.photos[2]} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={dog.photos[3]} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        ) } 
        else {
            return (
                    <Header as='h2'>DogPics</Header>
            );
        }
    }
};

const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }
 
 export default connect(mapStatetoProps)(FourPictureCarousel);

//  export default connect(mapStatetoProps)(ReactDOM.render(<FourPictureCarousel />, document.querySelector('.demo-carousel')));