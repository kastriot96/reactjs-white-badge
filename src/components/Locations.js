import { Component } from "react";

import Location from "./Location";
import classes from "./Locations.module.css";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      showLocations: true,
      more: "Test",
    };
  }
  componentDidUpdate() {
    // try {
    // someCodeWhichMightFail()
    // } catch (err) {
    // // handle error
    // }
    if (this.props.locations.length === 0) {
      throw new Error("No locations provided!");
    }
  }
  toggleLocationsHandler() {
    // this.state.showLocations = false; // NOT!
    this.setState((curState) => {
      return { showLocations: !curState.showLocations };
    });
  }
  render() {
    const locationsList = (
      <ul>
        {this.props.locations.map((location) => (
          <Location key={location.id} name={location.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.locations}>
        <button onClick={this.toggleLocationsHandler.bind(this)}>
          {this.state.showLocations ? "Hide" : "Show"} Netcentric locations
        </button>
        {this.state.showLocations && locationsList}
      </div>
    );
  }
}

// FUNCTIONAL BASED
// const Locations = () => {
// const [showLocations, setShowLocations] = useState(true);
// const toggleLocationsHandler = () => {
// setShowLocations((curState) => !curState);
// };
// const locationsList = (
// <ul>
// {DUMMY_LOCATIONS.map((location) => (
// <Location key={location.id} name={location.name} />
// ))}
// </ul>
// );
// return (
// <div className={classes.locations}>
// <button onClick={toggleLocationsHandler}>
// {showLocations ? 'Hide' : 'Show'} Locations
// </button>
// {showLocations && locationsList}
// </div>
// );
// };
export default Locations;
