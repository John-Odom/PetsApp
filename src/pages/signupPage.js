import React from 'react';
import { connect } from 'react-redux'


class Signup extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
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

const mapDispatchToProps = () =>{
  
}

export default connect(null, mapDispatchToProps)(Signup);
