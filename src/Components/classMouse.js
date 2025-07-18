import React, {Component} from 'react'

export class ClassMouse extends Component{
    constructor(){
        super() // calls base class constructor (Component is the base class provided by React. ie super() calls the constructor of Component class. classMouse is a subclass that inherits from Component ie why we write extends Component)
        this.state= {
            x: 0,
            y: 0
        }
    }
    logMousePosition= (e) => {
        this.setState({x: e.clientX, y: e.clientY}) // clientX (x-axis) and clientY (y-axis) represent position of mouse relative to visible portion of browser(viewport)
    }
    componentDidMount(){     // this lifecycle method runs once when the component mounts. It attaches a mousemove event listener to the whole window so it tracks the mouse anywhere in the viewport.
        window.addEventListener('mousemove', this.logMousePosition)
    }
    
    render(){    // displays current x and y values from the state. It re-renders every time the state updates (ie on every mouse move)
        return(
            <div>
                X- {this.state.x} Y- {this.state.y}
            </div>
        )
    }
}

/* 
    without hook clean up is done as given below

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition)
    }
*/