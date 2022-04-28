import { Fragment, useState, useEffect, Component } from "react";

import Locations from "./Locations";
import classes from "./LocationFinder.module.css";

import LocationsContext from "../store/locations-context";
import ErrorBoundary from "./ErrorBoundary";

class LocationFinder extends Component {
  static contextType = LocationsContext;

  constructor() {
    super();
    this.state = {
      filteredLocations: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredLocations: this.context.locations });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredLocations: this.context.locations.filter((location) =>
          location.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <span>Search for location : </span>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Locations locations={this.state.filteredLocations} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// FUNCTIONAL BASED
// const LocationFinder = () => {
// const [filteredLocations, setFilteredLocations] = useState(DUMMY_LOCATIONS);
// const [searchTerm, setSearchTerm] = useState('');
// useEffect(() => {
// setFilteredLocations(
// DUMMY_LOCATIONS.filter((location) => location.name.includes(searchTerm))
// );
// }, [searchTerm]);
// const searchChangeHandler = (event) => {
// setSearchTerm(event.target.value);
// };
// return (
// <Fragment>
// <div className={classes.finder}>
// <input type='search' onChange={searchChangeHandler} />
// </div>
// <Locations locations={filteredLocations} />
// </Fragment>
// );
// };
export default LocationFinder;
