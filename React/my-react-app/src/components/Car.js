import { Component } from "react";

class Car extends Component{
    constructor(){
        super();
        this.state={color:'Red',brand:'Agira'}
    }
    render(){
            

        return(
            <>
                <h1>This is class State compomnet color is {this.state.color}{this.state.brand}</h1>
                {/* <button onClick={()=>this.setState({color:'blue'})} >click me</button>
                </> */}

                <button onClick={()=>this.setState(previousValue=>{ return {...previousValue,color:'Blue',brand:'Bugati'}})} >click me</button>
                  

</>
        );
        
    }
}

export default Car;