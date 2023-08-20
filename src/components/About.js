import User from "./user";
import Userclass from "./UserClass";
import { Component } from "react";
// const About = () => (
//   <div>
//     <h1>About</h1>
//     <h2>Learning React</h2>
//     <Userclass name={"Jayapriya"} location={"Chennai"}></Userclass>
//   </div>
// );

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Is Called...");
    this.state = {
      userInfo: {
        login: "Dummy Name",
        location: "Dummy location",
        avatar_url: "avatar_url Dummy",
      },
    };
  }
  async componentDidMount() {
    console.log("Parent Component Did Mount  Is Called...");
    const data = await fetch("https://api.github.com/users/priyashanmugaraj");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update is Called..");
  }
  componentWillUnmount() {
    console.log("Component Will UnMount is Called..");
  }
  render() {
    console.log("Parent Render Is Called...");
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>About</h1>
        <h2>Learning React</h2>
        <Userclass
          name={login}
          location={location}
          avatar_url={avatar_url}
        ></Userclass>
      </div>
    );
  }
}

export default About;
