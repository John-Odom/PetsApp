import React, { Component } from 'react';
import {Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class description extends Component {
    render() {
        return (
            <div>
                <Header as='h3'>description</Header>
                <p>
                  {this.props.chosenDog ? this.props.chosenDog.bio : null}
                </p>
            </div>
        );
    }
}

const mapStatetoProps = state => {
   return ({
     chosenDog: state.chosenDog
   })
}

export default connect(mapStatetoProps)(description);