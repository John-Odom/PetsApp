import React, { Component } from 'react';
import {Responsive,Segment,Visibility,Card, Menu, Dropdown, Button} from 'semantic-ui-react'
import {getWidth} from '../actions/allActions'
import { withRouter } from 'react-router-dom'
import NavBar from '../navBar'
import {getOrgs, getPetFinderToken} from '../actions/fetches'
import OrgCard from './orgCard'
import {connect} from 'react-redux'
import {landOrgs,landMoreOrgs, setToken, cityChange} from '../actions/reducerActions'
import {cityOptions} from '../dogsPage/sidebarCities'

class DesktopContainer extends Component {

  state = {
    city: null,
    loaded: false,
    page: 1
  }
  
    findOrgs = (token, city=null) =>{
      getOrgs(token, city).then(orgs => this.props.landOrgs(orgs.organizations))
    }

    componentDidMount(){
      if(this.props.apiToken && this.props.city){
        this.findOrgs(this.props.apiToken, this.props.city)
      } 
      else if (this.props.apiToken){
        this.findOrgs(this.props.apiToken)
      }
      else {
        getPetFinderToken()
        .then( token => {
          this.findOrgs(token.access_token)
          this.props.setToken(token.access_token)
        })
      }
      window.addEventListener('scroll', this.onScroll, false);
      window.addEventListener('beforeunload', ()=> window.scroll(0,0));
      this.setState({loaded:true})
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
      window.scrollTo(0, 0)
    }

    onScroll = () => {
      let doc = document.body
      let docHeight = Math.max( doc.scrollHeight, doc.offsetHeight, doc.clientHeight )
      if ((window.innerHeight + window.scrollY) >= (docHeight) && this.state.loaded){
        {this.onPaginatedSearch()}
      }
    } 

  onPaginatedSearch = () => {
     this.setState({page: this.state.page+1, loaded:!this.state.loaded})
     getOrgs(this.props.apiToken, this.props.city, this.state.page).then(data=>{
         this.props.landMoreOrgs(data)
         this.setState({loaded:!this.state.loaded})
     })
  }

    handleCityChange = (e, {value}) => {
      this.setState({ city:value })
      this.props.cityChange(value)
    }

    handleCitySubmit = () =>{
      getOrgs(this.props.apiToken, this.state.city)
        .then(data=> this.props.landOrgs(data.organizations))
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      let orgs=this.props.landingOrgs

    if(orgs){
      let mapOrgs = orgs.map((org) => <OrgCard key={org.id} org={org}/>)
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility>
            <Segment inverted className='orgs-page-container' vertical>
              <NavBar history={this.props.history}/>
              <div className='menu'> 
                <Menu.Item  as='a'>
                  <Dropdown button className='icon' floating labeled options={cityOptions} 
                    search onChange={this.handleCityChange} placeholder='Select City'/>
                </Menu.Item>
                <Button onClick={()=> this.handleCitySubmit()}> Submit  </Button>
              </div>
              <Card.Group itemsPerRow={4}>
                {mapOrgs && mapOrgs }
              </Card.Group>
            </Segment>
          </Visibility>
        </Responsive>
      )
    } else{
        return null
    }
  }
}

  const mapStatetoProps = state => {
    return ({
      apiToken: state.apiToken,
      landingOrgs : state.landingOrgs,
      city: state.city
    })
 }

  export default withRouter( connect(mapStatetoProps,{landOrgs, landMoreOrgs, setToken, cityChange})(DesktopContainer));