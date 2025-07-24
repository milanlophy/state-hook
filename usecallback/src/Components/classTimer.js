import React, {Component} from "react";
/*
export class ClassTimer extends Component{
    interval // instance field or cls property
    constructor(){
        super()
        this.state = {
            timer : 0
        }
    }
    componentDidMount(){
        this.interval= setInterval(()=>{
            this.setState(prevState => ({timer: prevState.timer + 1})) // (prevState => {timer : prevState.timer + 1}) won't work react think we are passing fn . To specify obj is returned add ({timer:...})
         },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                Class Timer - {this.state.timer}
                <button onClick={()=>clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}
    */


export class ClassTimer extends Component{
    interval
    constructor(){
        super()
        this.state={
            timer: 0
        }
    }
    componentDidMount(){
        this.interval= setInterval(()=>{
            this.setState(prevState => ({timer: prevState.timer + 1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                {this.state.timer} <button onClick={()=>clearInterval(this.interval)}>Clear interval</button>
            </div>
        )
    }
}