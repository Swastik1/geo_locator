import React, { Component } from 'react'

export class Loader extends Component {
    render() {
        const message = "Please accept the Location"
        return (
            <div className="ui active dimmer"> 
            <div className="ui big text loader">{message}</div>
            </div>
        )
    }
}

export default Loader
