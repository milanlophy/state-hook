import React,{Component} from 'react'

console.log('Setting document title using lifecycle methods...')
/*
export class ClassCounterOne extends Component{
    constructor(){
        super()
        this.state= {
            count: 0
        }
    }
    componentDidMount(){
        document.title= `Clicked ${this.state.count} times` // set title of document from react app to clicked 0 times(1st count is initialized to zero)
    }
    componentDidUpdate(prevProps, prevState){
        document.title= `Clicked ${this.state.count} times` // set title whenever count changes.
    }
    render(){
        return(
            <div>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}
*/

console.log('Conditional run effects and updations in class component...')

export class ClassCounterOne extends Component{
    constructor(){
        super()
        this.state= {
            count: 0,
            name: ''
        }
    }
    componentDidMount(){
        document.title= `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count!= this.state.count){
            console.log('Updating document title')
            document.title= `Clicked ${this.state.count} times`
        }
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} placeholder='Enter your name' />
                <button onClick={()=> this.setState({count: this.state.count+1})}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

