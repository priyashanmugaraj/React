import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name + " Child Constructor Is Called...");
  }
  componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount  Is Called...");
  }

  render() {
    const { name, location, avatar_url } = this.props;
    const { count, count1 } = this.state;
    console.log(name + " Child Render Is Called...");

    return (
      <div className="User-Card">
        <img src={avatar_url}></img>
        <h1>Name:{name}</h1>
        <h1>Locations:{location}</h1>
        <h1>Contact:{"priya@gmail.com"}</h1>
      </div>
    );
  }
}

export default Userclass;
