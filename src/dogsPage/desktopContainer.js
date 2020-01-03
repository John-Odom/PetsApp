import React, { Component } from 'react';
import {
    Responsive,
    Segment,
    Visibility,
    Card, 
    Search
  } from 'semantic-ui-react'
import {getWidth} from '../actions/allActions'
import { withRouter } from 'react-router-dom'
import NavBar from '../navBar'
import {getDogs} from '../actions/fetches'
import DogCard from './dogCard'
import { connect } from 'react-redux';
import { landDogs, landMoreDogs, filterDogs } from '../actions/reducerActions'


class DesktopContainer extends Component {
    constructor() {
        super() 
        this.state = {
           start: 0,
           search: ''
        }
     }
  
     componentDidMount() {
         console.log('mounted')
      getDogs()
               .then((data) => {
                  this.props.landDogs(data)
                 // this.setState({allDogs: data})
                 })
      window.addEventListener('scroll', this.onScroll, false);
     }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    onPaginatedSearch = () => {
        this.setState({
           start: this.state.start + 56
        })
    }

    getSearchValue = (value) => {
      this.setState({search: value})
      this.filterDogs(value)
    }

    filterDogs = () => {
      let filteredDogs = this.props.landingDogs.filter (dog => {
         return dog.name.toLowerCase().startsWith(this.state.search.toLowerCase())
      })
      console.log(filteredDogs)
      return filteredDogs
    }
  
    render() {
        console.log('filtered dogs', this.filterDogs())
      const mapDogs = this.filterDogs().map((dog) => 
      <DogCard 
         key={dog.id}
         dogId={dog.id}
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
              <Card.Group itemsPerRow={4}>
                {mapDogs ? mapDogs : null}
              </Card.Group>
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
      filter: state.filter
    })
  }

  export default withRouter(connect(mapStatetoProps, { landDogs, landMoreDogs, filterDogs })(DesktopContainer));