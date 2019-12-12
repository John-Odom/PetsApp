import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({      
        user: this.state
      })

    }).then(res=> res.json())
    .then(data => {
      localStorage.setItem("jwt", data.jwt)
      this.props.history.push('/loading')
				// this.props.setCurrentUser(payload.user.id)
				// getMovies()
				// .then((data) => {this.props.landMovies(data.results)})
				// .then(() => this.props.history.push(`/welcome`))
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
        username: <input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/>
        password: <input type="text"  onChange={this.handleChange} name="password" value={this.state.password}/>
        <input type="submit" />
      </form>
    </div>
  );
}}

export default withRouter(connect(null)(Login));