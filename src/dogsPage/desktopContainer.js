import React, { Component } from 'react';
import { Responsive,Segment, Visibility, Card, Search} from 'semantic-ui-react'
import {getWidth,filterPups} from '../actions/allActions'
import { withRouter } from 'react-router-dom'
import NavBar from '../navBar'
import {
  getDogs,
   getPetFinderToken} from '../actions/fetches'
import DogCard from './dogCard'
import { connect } from 'react-redux';
import { landDogs, landMoreDogs, filterDogs } from '../actions/reducerActions'

class DesktopContainer extends Component {
        state = {
           search: ''
        }
  
     componentDidMount() {
       this.props.landDogs([])
       getPetFinderToken().then((token) => {
         getDogs(token.access_token)
         .then(data=>{
          this.props.landDogs(data.animals)
         })
      })
      
     }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    getSearchValue = (value) => {
      this.setState({search: value})
      filterPups(this.props.landingDogs, this.state.search)
    }

    dogBreeds = []

    // dropdownOptions = [
    //   { key: 1, text: 'Choice 1', value: 1 },
    //   { key: 2, text: 'Choice 2', value: 2 },
    //   { key: 3, text: 'Choice 3', value: 3 },
    // ]
  
    render() {
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
              <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} 
                showNoResults={false} value={this.props.searchBar} id="dogs-page-searchbar"/>
              {/* <Dropdown clearable options={this.dropdownOptions} selection /> */}
              <Card.Group itemsPerRow={4}> {mapDogs ? mapDogs : null} </Card.Group>
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
    })
  }

  export default withRouter(connect(mapStatetoProps, { landDogs, landMoreDogs, filterDogs })(DesktopContainer));