import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './components/app/app';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//       nationality: "ukr"
//     }
//     // this.nextYear = this.nextYear.bind(this);
//   }
//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
//   render() {
//     const { name, surname, link } = this.props;
//     const { years, nationality } = this.state;
//     return (
//       <>
//       <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years - {years}, nationality - {nationality}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//     <WhoAmI name="John" surname="Smith" link="facebook.com"/>
//     <WhoAmI name="Bob" surname="Colt" link="facebook.com"/>
//     <WhoAmI name="Sam" surname="Bolt" link="facebook.com"/>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <All/> */}
  </React.StrictMode>
);