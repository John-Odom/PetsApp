import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Segment, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { clickOrg } from '../actions/reducerActions'
// import { findDog } from '../actions/fetches'
import '../stylesheets/landingPage.css';


class OrgCard extends Component {

//    handleClick = (dogId) => {
//      this.props.history.push(`/dogs/${dogId}`)
//    }
handleClick = (id) => {
    this.props.history.push(`/organizations/${id}`)
  }

   render() {
       console.log(this.props.org.id)
      return(
      <Card 
      onClick={() => this.handleClick(this.props.org.id)}
        ><Segment>
           <img id='orgCard' style={{ maxHeight: 300, maxWidth: 300 }} src={this.props.org.image} alt={this.props.org.name} />
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
    //   <Card
    //   onClick={() => this.handleClick(this.props.dogId)}
    //     //  id='dog-card'
    //   >
    //   <img id='dogcard-image' alt='Doggo' src={this.props.dog.image} size='medium' />
    //   <Card.Content>
    //     <Card.Header>{this.props.dog.name}</Card.Header>
    //     <Card.Meta>
    //       <span className='date'>Age: {this.props.dog.age}</span>
    //     </Card.Meta>
    //     <Card.Description>
    //       {this.props.dog.bio}
    //     </Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //       <Icon name='user' />
    //       Location: {this.props.dog.location}
    //   </Card.Content>
    // </Card>
      )
   }
} 

// const mapStatetoProps = state => {
// //    return ({
// //      movieInfo: state.movieInfo
// //    })
// }

// export default DogCard
export default withRouter(connect(null, {clickOrg})(OrgCard));

   

