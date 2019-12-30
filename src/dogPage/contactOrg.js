import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    Container,
    Grid,
    Segment,
    Header,
  } from 'semantic-ui-react'

class ContactOrg extends Component {
    
    render() {
        let dog=this.props.chosenDog
        if(this.props.chosenDog){
        return (
            <div>
                <Container text>
                  <Grid columns='equal' divided inverted padded>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                          <Header
                              as='h1'
                              content='Organization Information'
                              inverted
                              style={{
                                fontSize: '2em',
                                fontWeight: 'normal',
                                marginTop: '1.5em',
                              }}
                          />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted>
                            <p><b>Organization:</b></p> <p><b>{dog.organization.name}</b></p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Phone:</b></p> <p><b>{dog.organization.phone ? dog.organization.phone : 'N/A'}</b></p>
                          </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted>
                            <p><b>Website:</b></p> 
                            {dog.organization.website ?
                                <a href={dog.organization.website}>
                                   {dog.organization.website? dog.organization.website : null}
                                </a>
                                : <p>N/A</p>}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Email:</b></p> <p><a href={"mailto:" + dog.organization.email}>{dog.organization.email}</a></p>
                          </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center'>
                    <Grid.Column>
                          <Segment color='black' inverted>
                            <p><b>Location:</b></p> 
                            <p>{dog.organization.street ? dog.organization.street: null}</p>
                            <p>{dog.organization.city}, {dog.organization.state} 
                            {dog.organization.zip}</p>
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
                    <Header as='h2'>Contact Organization</Header>
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