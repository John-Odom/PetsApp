import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Segment, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setOrg} from '../actions/reducerActions'
// import { findDog } from '../actions/fetches'
import '../stylesheets/dogsPage.css';
import noPhotoPic from '../images/no-photo-business.jpg'
import {postOrg}from '../actions/fetches'


class OrgCard extends Component {

handleClick = (org) => {
    // console.log(org)
    postOrg(org)
    .then(data => {
      this.props.setOrg(org)
      this.props.history.push(`/organizations/${data.id}`)
    })
    
  }

   render() {
      return(
      <Card 
      onClick={() => this.handleClick(this.props.org)}
        ><Segment>
           <img id='orgCard' style={{ maxHeight: 300, maxWidth: 300 }} 
           src={this.props.org.photos.length>0 ? this.props.org.photos[0].medium: noPhotoPic} alt={this.props.org.name} />
        <Divider clearing />
        <Header
            as='h1'
            content={this.props.org.name}
            inverted
            style={{
              fontSize: '2em',
              color:'black',
              margin: '.5em',
            }}
        />
        <Divider clearing />
        <p><b>{this.props.org.city}, {this.props.org.state}</b></p>
       </Segment>  
      </Card>
      )
   }
} 

export default withRouter(connect(null, {setOrg})(OrgCard));

   

