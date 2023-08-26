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
      <div className="p-2 m-2 border-2 max-w-md border-black">
        <img className=" py-2" src={avatar_url}></img>
        <h1 className="text-2xl">Name:{name}</h1>
        <h1 className="text-2xl">Locations:{location}</h1>
        <h1 className="text-2xl">Contact:{"priya@gmail.com"}</h1>
      </div>
    );
  }
}

export default Userclass;
