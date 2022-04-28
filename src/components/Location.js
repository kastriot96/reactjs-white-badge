import { Component } from "react";

import classes from "./Location.module.css";

class Location extends Component {
  componentWillUnmount() {
    console.log("Location will unmount!");
  }

  render() {
    return <li className={classes.location}>{this.props.name}</li>;
  }
}
// const Location = (props) => {
// return <li className={classes.location}>{props.name}</li>;
// };

export default Location;
