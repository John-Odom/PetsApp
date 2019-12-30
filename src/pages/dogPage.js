import { withRouter } from 'react-router-dom';
// import {findDog, findDogInApi} from '../actions/fetches';
import {findDog} from '../actions/fetches';

import {clickDog} from '../actions/reducerActions';
import { connect } from 'react-redux';
import  Description  from '../dogPage/contactOrg'
import '../stylesheets/dogPage.css';


//     // componentDidMount() {
//     //     findDog()
//     //     .then( dog =>{
//     //         this.props.clickDog()
//     //     })
//     // }


//    render() {
//       return(
//          <div id="movie-background">
//             <NavBar />
//             <Container id='movie-pg-container'>
//                <DogBar />
//                <Divider />
//                <Grid columns={2} >
//                   {/* <MovieInfo />
//                   <Sources />
//                   <Trailer />
//                   <MovieCast /> */}
//                </Grid>
//             </Container>
//          </div>
//       )
//    }
// } 


import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Image,
  Segment,
} from 'semantic-ui-react'
import MobileContainer from '../dogPage/mobileContainer'
import HomepageHeading from '../dogPage/homePageHeading'
import DesktopContainer from '../dogPage/desktopContainer'


HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


class DogPage extends Component {
   state = {
      dog:null
   }
       componentDidMount () {
        const dogId = this.props.match.params.id
        findDog(dogId)
        .then((dog) => {
           this.setState({dog})
           this.props.clickDog(dog);
           console.log(dog)
         // findDogInApi(dog)
         // .then(dog =>{
         //    console.log(dog)
         // })
         })
      }
   
      render(){   
         console.log(this.state.dog ? this.state.dog.image2 : null)
         return(
         <ResponsiveContainer>
           <Segment style={{ padding: '8em 0em' }} vertical>
             <Grid container stackable verticalAlign='middle'> 
               <Grid.Row>
                 <Grid.Column width={8}>
                 <Image bordered rounded size='large' src={this.state.dog ? this.state.dog.image2 : null} />
                 </Grid.Column>
                 {this.state.dog && this.state.dog.image3 ?
                 <Grid.Column width={8}>
                 <Image bordered rounded size='large' src={this.state.dog ? this.state.dog.image3 : null} />
                 </Grid.Column>: null }
                 {this.state.dog && this.state.dog.image4 ? 
                 <Grid.Column width={5}>
                  <Image bordered rounded size='large' src={this.state.dog ? this.state.dog.image4 : null} />
                 </Grid.Column> : null }
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column textAlign='center'>
                     <Container text>
                        <Description />
                     </Container>
                  </Grid.Column>
               </Grid.Row>
               {/* <Grid.Row>
                 <Grid.Column textAlign='center'>
                   <Button size='huge'>Check Them Out</Button>
                 </Grid.Column>
               </Grid.Row> */}
             </Grid>
           </Segment>
           {/* <Segment style={{ padding: '0em' }} vertical>
             <Grid celled='internally' columns='equal' stackable>
               <Grid.Row textAlign='center'>
                 <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                   <Header as='h3' style={{ fontSize: '2em' }}>
                     "What a Company"
                   </Header>
                   <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                 </Grid.Column>
                 <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                   <Header as='h3' style={{ fontSize: '2em' }}>
                     "I shouldn't have gone with their competitor."
                   </Header>
                   <p style={{ fontSize: '1.33em' }}>
                     <Image avatar src='/images/avatar/large/nan.jpg' />
                     <b>Nan</b> Chief Fun Officer Acme Toys
                   </p>
                 </Grid.Column>
               </Grid.Row>
             </Grid>
           </Segment> */}
           {/* <Segment style={{ padding: '8em 0em' }} vertical>
             <Container text>
               <Header as='h3' style={{ fontSize: '2em' }}>
                 Breaking The Grid, Grabs Your Attention
               </Header>
               <p style={{ fontSize: '1.33em' }}>
                 Instead of focusing on content creation and hard work, we have learned how to master the
                 art of doing nothing by providing massive amounts of whitespace and generic content that
                 can seem massive, monolithic and worth your attention.
               </p>
               <Button as='a' size='large'>
                 Read More
               </Button>
               <Divider
                 as='h4'
                 className='header'
                 horizontal
                 style={{ margin: '3em 0em', textTransform: 'uppercase' }}
               >
                <a href='#'>Case Studies</a>
               </Divider>
               <Header as='h3' style={{ fontSize: '2em' }}>
                 Did We Tell You About Our Bananas?
               </Header>
               <p style={{ fontSize: '1.33em' }}>
                 Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                 it's really true. It took years of gene splicing and combinatory DNA research, but our
                 bananas can really dance.
               </p>
               <Button as='a' size='large'>
                 I'm Still Quite Interested
               </Button>
             </Container>
           </Segment> */}
           {/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
             <Container>
               <Grid divided inverted stackable>
                 <Grid.Row>
                   <Grid.Column width={3}>
                     <Header inverted as='h4' content='About' />
                     <List link inverted>
                       <List.Item as='a'>Sitemap</List.Item>
                       <List.Item as='a'>Contact Us</List.Item>
                       <List.Item as='a'>Religious Ceremonies</List.Item>
                       <List.Item as='a'>Gazebo Plans</List.Item>
                     </List>
                   </Grid.Column>
                   <Grid.Column width={3}>
                     <Header inverted as='h4' content='Services' />
                     <List link inverted>
                       <List.Item as='a'>Banana Pre-Order</List.Item>
                       <List.Item as='a'>DNA FAQ</List.Item>
                       <List.Item as='a'>How To Access</List.Item>
                       <List.Item as='a'>Favorite X-Men</List.Item>
                     </List>
                   </Grid.Column>
                   <Grid.Column width={7}>
                     <Header as='h4' inverted>
                       Footer Header
                     </Header>
                     <p>
                       Extra space for a call to action inside the footer that could help re-engage users.
                     </p>
                   </Grid.Column>
                 </Grid.Row>
               </Grid>
             </Container>
           </Segment> */}
         </ResponsiveContainer>
)}}

export default withRouter(connect(null, {clickDog} )(DogPage));
