import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    Container,
    Grid,
    Segment,
    Header,
    Button
  } from 'semantic-ui-react'

class ContactOrg extends Component {
    
    render() {
        let dog=this.props.chosenDog
        if(this.props.chosenDog){
        return (
            <div>
                <Header as='h3'>Contact Organization</Header>
                <Container text>
                  <Grid columns='equal' divided inverted padded>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted>
                            <p><b>Organization:</b></p> {dog.organization.name}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Phone:</b></p> {dog.organization.phone}
                          </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted>
                            <p><b>Website:</b></p> <a href={dog.organization.website}>{dog.organization.website}</a>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Email:</b></p> {dog.organization.email}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Address:</b></p> 
                            <p>{dog.organization.state}</p>
                          </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
              </Container>
            </div>
        );
        }
        else {
            return (
                    <Header as='h3'>Contact Organization</Header>
            );
        }
    }
}

const mapStatetoProps = state => {
   return ({
     chosenDog: state.chosenDog
   })
}

export default connect(mapStatetoProps)(ContactOrg);