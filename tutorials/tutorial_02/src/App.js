import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./weather/WeatherApp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>

    );
  }
}
export default App;