import React, { Component } from 'react'

export class IntervalClassCounter extends Component{
    constructor(){
        super()
        this.state= {
            count: 0
        }
    }
    componentDidMount(){
        this.interval= setInterval(this.tick, 1000)// start a timer when component mounts (call tick() after every 1sec)
    }
    componentWillUnmount(){
        clearInterval(this.interval)    // stops the timer when unmounted
    }
    tick= () =>{
        this.setState({
            count: this.state.count + 1 // increment count value by one
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
    
