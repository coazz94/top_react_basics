import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


  const formatName = (user) => {
    return user.firstName + " " + user.lastName
  }

  const user = {
    firstName: "Aleksandar",
    lastName: "Popovic",
  }

  const greetUser = (user) => {
    if (user) return <h1>Hello, {formatName(user)}</h1>;
    return <h1>Hello, Stranger</h1>;
  }

  // const emptyElement = <img src={user.avatarUrl} />;

  const elementChildren = (
    <div>
        <p>-------------Element with children -------------</p>
        <h1>Hello!</h1>
        <h2>Good to see you here</h2>
        <p>{formatName(user)}</p>
    </div>
  )

  const link = <a href="https://www.reactjs.org"> Link </a>

  const App = () => {
    const element = (<h1>Hello, TEST</h1>)
    const greet = greetUser(user);
    return (<div>{[element, link, greet, elementChildren]}</div>)
  }

  const Test = () => {
    const mjau = <h1 className='red'>mjau</h1>;
    return (mjau)
  }





export default App;
export  {Test};
