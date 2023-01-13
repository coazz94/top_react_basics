import React, { Component } from "react";


// WITHOUT DESTRUCTURING
// class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <button onClick={this.props.onButtonClicked} >Click me !</button>
//             </div>
//         );
//     }
// }

// WITH DESTRUCTURING
class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, onButtonClicked } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <button onClick={onButtonClicked} >Click me !</button>
            </div>
        );
    }
}


//  const MyComponent = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <button onClick={props.onButtonClicked} >Click me !</button>
//         </div>
//     )
//  }


export default MyComponent;