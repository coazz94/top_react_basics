import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import MyComponent from "./MyComponent";
// jelena je najbolja zena na svijetu i ja je volim najvise <3


const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component {
    constructor(){
        super();

        this.state = {
            count:0,
        };

        this.countUp = this.countUp.bind(this);
    }

    countUp(){
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.countUp} >Click me !</button>
                <p>{this.state.count}</p>
            </div>
        )
    }


}



  root.render(
    <div>
        <App/>
    </div>
  )