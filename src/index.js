import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Test} from './App';
import {Comment} from './Comment';
import reportWebVitals from './reportWebVitals';


// React app have always one root DOM node (if you implement a new app in a App you can make another)

const root = ReactDOM.createRoot(document.getElementById('root'));

const comment = {
  // date: new Date(),
  date: "29.10.1994",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

// render root with something
root.render(
  <React.StrictMode>
    <Comment
      name= {comment.author.name}
      text = {comment.text}
      date = {comment.date}
      author = {comment.author}
    />
  </React.StrictMode>
);

// root.render(
//   setInterval(tick, 1000)
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



  // const Welcome = (props) => {
  //   return (<h1>Hello, {props.name}</h1>)
  // }


  // const x = <Welcome name="Sara" />

  // root.render(
  //   <div>
  //     <Welcome name="Milan"/>
  //     <Welcome name="Aleks"/>
  //     <Welcome name="Zeks"/>
  //     <Welcome name="Jeca"/>
  //   </div>
  // )


  // function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);}