import React, { Component } from 'react'

class FixedToolBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="fixed_toolbar">
                <p>index</p>
                <button onClick="">ClickMe</button>
            </div>
        )
    }
}

export default FixedToolBar
