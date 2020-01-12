import React, { Component } from 'react';
import DogCard from './dogCard'
import VerticalSidebar from './sidebar';
import {filterPups} from '../actions/allActions'
import {  Segment, Card, Button, Sidebar} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {  landDogs, landMoreDogs } from '../actions/reducerActions'
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
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.setState({loaded:true})
     }
    
     componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
        window.scrollTo(0, 0)
     }
    
     onScroll = () => {
         let docHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
            document.body.clientHeight )

        if ((window.innerHeight + window.scrollY) >= (docHeight) && this.state.loaded){
           {this.onPaginatedSearch()}
        }
     } 
  
     onPaginatedSearch = () => {
        this.setState({page: this.state.page + 1, loaded:!this.state.loaded})
        getDogs(this.props.apiToken, this.state.page).then(data=>{
            this.props.landMoreDogs(data)
            this.setState({loaded:!this.state.loaded})
        })
        //    if (this.props.filter === 'all') {
        //       return landMoreDogs(this.state.start)
        //       .then((data) => {this.props.landMoreDogs(data.results)})
        //    } 
        //    else {
        //       return getMoreFilteredMovies(this.state.start, this.props.filter)
        //       .then((data) => {this.props.landMoreMovies(data.results)})
        //    }
        }

    render(){
        const animation= this.state.animation
        const visible = this.state.visible
        const mapDogs = filterPups(this.props.landingDogs, this.state.search).map((dog) => 
            <DogCard key={dog.id} dog={dog}/>
        )
        window.addEventListener('beforeunload', function (e) {
            window.scroll(0,0)
          });
        
        return (
            <Segment>
                <Button onClick={this.handleAnimationChange('overlay')}>
                    Filter
                </Button>
                <Sidebar />
                <Sidebar.Pushable as={Segment}>
                    <VerticalSidebar animation={animation} visible={visible}/>
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
      apiToken: state.apiToken
    })
  }

export default withRouter(connect(mapStatetoProps, { landDogs, landMoreDogs })(DogCards));