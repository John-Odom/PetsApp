import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { setCurrentUser, landDogs } from '../actions/reducerActions'
import { handleNewUser, getAuthToken, getDogs } from '../actions/fetches'


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
             .then(() => this.props.history.push(`/welcome`))
             })
          .then(this.setState({
             username: '',
             password: ''
          }))
        }
    }
      )
    // .then(res => {
    //    if (res.errors) {
    //     console.log("in if statement")
    //       alert("sorry, username has already been taken") 
    //    } else {
    //      console.log("in else statement")
    //       getAuthToken({ username: this.state.username, password: this.state.password})
    //       .then(payload => {
    //          localStorage.setItem('token', payload.jwt)
    //          this.props.history.push('/cinepop')
    //          this.props.setCurrentUser(payload.user.id)
    //          getDogs()
    //          .then((data) => {this.props.landDogs(data.results)})
    //          .then(() => this.props.history.push(`/welcome`))
    //          })
    //       .then(this.setState({
    //          username: '',
    //          password: ''
    //       }))
    //    }
    // })
 } 

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch("http://localhost:3000/users", {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({      
  //       user: this.state
  //     })

  //   }).then(res=> res.json())
  //   .then(data => {
  //     localStorage.setItem("jwt", data.jwt)
  //     console.log(data.user)
  //     this.props.setCurrentUser(data.user.id)
  //   }
  //     )
  // }

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
