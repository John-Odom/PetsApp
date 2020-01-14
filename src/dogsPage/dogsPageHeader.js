import React, { Component } from "react";
import '../stylesheets/dogsPage.css'

export default class DogsPageHeader extends Component {
    render() {
        return(
            <div>
                <p style={{fontSize:'10vh', margin:0, padding:0, color:'#80CAB1'}}>Discover Dogs</p>
                <p style={{fontSize:'3vh', margin:0, padding:0, color:'#80CAB1'}}>Dogscover your perfect furry pal</p>
            </div>
        )
    }
}
