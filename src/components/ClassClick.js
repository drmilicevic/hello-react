import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log('Button clicked again');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me classclick</button>
            </div>
        )
    }
}

export default ClassClick;