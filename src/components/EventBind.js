import React, { Component } from "react";

class EventBind extends Component {
    constructor (props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState ({
    //         message:'Goodbye'
    //     })
    // }

    //Class property as arrow function

    clickHandler = () => {
        this.setState ({
            message:'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/} {/*Binding in render*/}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/} {/*Arrow function in render*/}
                <button onClick={this.clickHandler}>Click</button>{/*Binding in the class constructor*/}

            </div>
        )
    }
}

export default EventBind;