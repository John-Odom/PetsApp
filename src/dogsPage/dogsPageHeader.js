import React, { Component } from "react";
import '../stylesheets/dogsPage.css'

export default class DogsPageHeader extends Component {
    render() {
        return(
            <div>
                <p style={{fontSize:'10vh', margin:0, padding:0, color:'#80CAB1'}}>Dog Finder</p>
                <p style={{fontSize:'3vh', margin:0, padding:0, color:'#80CAB1'}}>find your perfect furry pal</p>
            </div>
        )
    }
}
