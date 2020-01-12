import React, { Component } from 'react';
import { Responsive,Segment, Visibility, Card, Button, Sidebar} from 'semantic-ui-react'
import {getWidth,filterPups} from '../actions/allActions'
import { withRouter } from 'react-router-dom'
import NavBar from '../navBar'
import {getDogs,getPetFinderToken} from '../actions/fetches'
import DogCard from './dogCard'
import { connect } from 'react-redux';
import { setToken, landDogs, landMoreDogs } from '../actions/reducerActions'
import VerticalSidebar from './sidebar'
import '../stylesheets/dogPage.css'

class DesktopContainer extends Component {
        state = {
           search: '',
          animation: 'overlay',
          visible:false
        }
      
        handleAnimationChange = (animation) => () =>
          this.setState((prevState) => ({ animation, visible: !prevState.visible }))
      
     componentDidMount() {
       if(!this.props.apiToken){
         getPetFinderToken().then((token) => {
           this.props.setToken(token.access_token)
           getDogs(token.access_token).then(data=>this.props.landDogs(data.animals))
        })
      }
     }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    getSearchValue = (value) => {
      this.setState({search: value})
      filterPups(this.props.landingDogs, this.state.search)
    }

    dogBreeds = []
  
    render() {
      const animation= this.state.animation
      const visible = this.state.visible
      
      const mapDogs = filterPups(this.props.landingDogs, this.state.search).map((dog) => 
      <DogCard 
         key={dog.id}
         dog={dog}
         />)

      const { children } = this.props

    if(this.props.landingDogs){
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 1000, padding: '1em 0em' }}
              vertical
            >
              <NavBar history={this.props.history}/>
              <Button onClick={this.handleAnimationChange('overlay')}>
                Filter
              </Button>
              {/* <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} 
                showNoResults={false} value={this.props.searchBar} id="dogs-page-searchbar"/> */}
              <Sidebar />
              <Sidebar.Pushable as={Segment}>
        <VerticalSidebar animation={animation} visible={visible}/>
          <Sidebar.Pusher>
            <Segment basic>
              <Card.Group itemsPerRow={4}> {mapDogs ? mapDogs : null} </Card.Group>
              </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    } else{
        return null
    }
    }
  }

  const mapStatetoProps = state => {
    return ({
      landingDogs: state.landingDogs,
      apiToken: state.apiToken
    })
  }

  export default withRouter(connect(mapStatetoProps, { setToken, landDogs, landMoreDogs })(DesktopContainer));