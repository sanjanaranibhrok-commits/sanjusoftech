import React from "react";
class Classfunction extends React.Component {
      
    
    constructor(props) {
        console.log("constructor called")
    super(props);
    this.state = { count: 5 }; // initializing state
  }
  increment = () => {
  this.setState({ count: this.state.count + 5 });
};


componentDidMount() {
console.log("component did mount called")
}

componentDidUpdate(prevProps, prevState, snapshot) {   
    console.log("component did update called"+prevState.count)
 }

    render() {
         console.log("render called")
        
         return (
            <div>
        <h1>Increment {this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        </div>
        )
    }
}

export default Classfunction;