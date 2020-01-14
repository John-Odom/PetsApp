import React, { Component } from 'react';
import DogCard from './dogCard'
import VerticalSidebar from './sidebar';
import {filterPups} from '../actions/allActions'
import {  Segment, Card, Button, Sidebar} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {  landDogs,cityChange, landMoreDogs } from '../actions/reducerActions'
import { getDogs } from '../actions/fetches';

class DogCards extends Component {
    state = {
        search: '',
        animation: 'overlay',
        visible:false,
        loaded:false,
        page:1
      }
    handleAnimationChange = (animation) => () =>{
        window.scrollTo(0,270);
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.setState({loaded:true})
        // this.props.cityChange('Atlanta, GA')
     }
    
     componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
        window.scrollTo(0, 0)
     }
    
     onScroll = () => {
         const body = document.body
         let docHeight = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight )
        if ((window.innerHeight + window.scrollY) >= (docHeight) && this.state.loaded){
           {this.onPaginatedSearch()}
        }
     } 
  
     onPaginatedSearch = () => {
        this.setState({page: this.state.page + 1, loaded:!this.state.loaded})
        getDogs(this.props.apiToken, this.state.page, this.props.city).then(data=>{
            this.props.landMoreDogs(data)
            this.setState({loaded:!this.state.loaded})
        })
    }

    render(){

        const mapDogs = filterPups(this.props.landingDogs, this.state.search).map((dog) => 
            <DogCard key={dog.id} dog={dog} />
        )
        window.addEventListener('beforeunload', () => window.scroll(0,0));
        
        return (
            <Segment>
                <div className='filter-div'>
                    <Button className='filter-button' secondary onClick={this.handleAnimationChange('overlay')}>
                        Filter Dogs
                    </Button>
                    <p style={{fontSize:'5vh'}}
                    >Dogs from {this.props.city ? this.props.city : 'all over the USA'}</p>
                </div>
                <Sidebar.Pushable as={Segment}>
                    <VerticalSidebar handleAnimationChange={this.handleAnimationChange} animation={this.state.animation} visible={this.state.visible}/>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Card.Group itemsPerRow={4}> {mapDogs} </Card.Group>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Segment>
        ) 
    }
}
const mapStatetoProps = state => {
    return ({
      landingDogs: state.landingDogs,
      apiToken: state.apiToken,
      city: state.city
    })
  }

export default withRouter(connect(mapStatetoProps, { landDogs, cityChange, landMoreDogs })(DogCards));