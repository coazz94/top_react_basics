import React, { Component } from "react";
import { ReactDOM } from "react";
import MyComponent from "./MyComponent";
// jelena je najbolja zena na svijetu i ja je volim najvise <3



class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <MyComponent title="React" />
            </div>
        )
    }
}