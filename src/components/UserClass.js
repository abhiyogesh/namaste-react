import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //how to use state variable, also set the state variables
    this.state = {
      userInfo : {
        name : "Dummy",
        location : "Default",
      },
    //  count: 0,
     // count2: 2,
    };

   // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount(){
    //console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/abhiyogesh");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo : json,
    })
  }
  componentDidUpdate (){
    console.log('component did update');
  }

  componentWillUnmount (){
    console.log('component will unmount')
  }
  render() {
   // console.log(this.props.name + "Child Render");
    const { login, location, avatar_url } = this.state.userInfo;
  //  const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() =>
            NEVER UPDATE STATE VARIABLES DIRECTLY
            e.g this.state.count = this.state.count +1;
            INSTEAD OF THIS USE setState
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name : {login}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @yogsharma0</h4>
      </div>
    );
  }
}
export default UserClass;


/*
 *----Mounting---
 *
 * *Constructor(dummy data)
 * Render(Dummy data)
 * <HTML Dummy >
 * Component Did Mount
 * <API Call>
 * <this.setState> -> State variable is updated
 * --- UPDATE
 * 
 * render(API data)
 * <HTML new API data>)
 * componentDid Update
 */