import React from "react";
import ReactDOM from "react-dom";

// FUNCTION COMPONENT

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
//     return (
//         <div>Hi there!!!</div>
//     )
// }

// CLASS COMPONENT

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Lattitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
