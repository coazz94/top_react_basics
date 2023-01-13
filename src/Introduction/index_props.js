import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import MyComponent from "./MyComponent";
// jelena je najbolja zena na svijetu i ja je volim najvise <3


const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component {
    constructor(props){
        super(props);
    }

    onclickBtn () {
        console.log("Button has been clicked")
    }

    render(){
        return(
            <div>
                <MyComponent title="React" onButtonClicked={this.onclickBtn} />
            </div>
        )
    }
}

// const onClickBtn = () =>{
//     console.log("Button has been clicked")
// }


// const App = () => {
//     return(
//         <div>
//             <MyComponent title="React2" onButtonClicked={onClickBtn}/>
//         </div>
//     )
// }


  root.render(
    <div>
        <App/>
    </div>
  )