import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs } from '../actions/reducerActions'

class OrgsDogs extends Component {

   render() {
      console.log('in the dogcards component', this.props.chosenOrg.dogs)

      return(
         <Card.Group itemsPerRow={4}>
            {/* {mapDogs} */}
         </Card.Group>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     chosenOrg: state.chosenOrg
   })
}

export default connect(mapStatetoProps, { landDogs})(OrgsDogs);
