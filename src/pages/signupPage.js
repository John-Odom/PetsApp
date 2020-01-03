import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { setCurrentUser, landDogs } from '../actions/reducerActions'
import { handleNewUser, getAuthToken, getDogs } from '../actions/fetches'
import { homeClick } from '../actions/allActions'



class Signup extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    handleNewUser(this.state)
      .then(data => {
        if (data.error) {
          alert("sorry, username has already been taken") 
        }
        else{
          getAuthToken(this.state)
          .then(payload => {
             localStorage.setItem('jwt', payload.jwt)
             localStorage.setItem('user_id', payload.user.id)
             this.props.setCurrentUser(payload.user.id)
             getDogs()
             .then((data) => {
               console.log(data)
               this.props.landDogs(data)
              })
             .then(() => homeClick(this))
             })
          .then(this.setState({
             username: '',
             password: ''
          }))
        }
    }
      )

 } 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        Username: <input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/><br />
        Password: <input type="text"  onChange={this.handleChange} name="password" value={this.state.password}/><br />
        <input type="submit" />
      </form>
    </div>
  );
}}


const mapStatetoProps = state => {
  return ({
   start: state.start
  })
}

export default withRouter(connect(mapStatetoProps, { setCurrentUser, landDogs })(Signup));
