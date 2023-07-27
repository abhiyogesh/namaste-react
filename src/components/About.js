//import User from "./User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
//import React from "react";
import { Component } from "react";
//import {UserContext} from "../utils/UserContext";

class About extends Component {
  constructor(props){
    super(props);
  //  console.log('Paren Constructor');
  }
  //Component did mount we used to make API call's once our component is mounted/loaded.
  //once our component loaded with basic details then we make API call's.
  componentDidMount(){
   // console.log('Parent Component did mount');
  }
 render(){
  //console.log('Paren rnder')
  return(
    <div>
      <h1>About Class Compnent</h1>
      <div>  
        {/* UserContext.Consumer we use as a context in class based component ,it is a compenent in which we have a callback function
        which gets data inside it, react passes the data , it handles everything */}
        {/* <UserContext.Consumer>
          {({loggedInUser})=> 
          <h1 className="text-xl font-bold">{loggedInUser}
          </h1>
          }
        </UserContext.Consumer> */}
      </div>
      <h2>This is Namasted React Web Series</h2>
      <UserClass name={"First"} location={"Faridabad Class"} />
      {/* <UserClass name={"Second"} location={"US"} />
      <UserClass name={"Third"} location={"UK"} /> */}
    </div>
  )
 }
}
/* 


 In lifecycle React is batching up the render phase of multiple childrens.
 Once the commit phase start React tries to update the DOM. DOM manipulation
 is the most expensive thing when we are updating a component it takes a lot of time.

 What is Render phase ?-
 In Render phase ,React is triggering  the reconcialiation phase/process in which it finds out the difference between
 two virtual DOM.Everythin happening in render phase in virtual DOM.
 why Virtual DOM is fast?
 -because virtual DOM is javascript, it deals with object.
 -In render phase React is finding difference between two diff.
-Parent Constructor
-Parent Render
 -First Child Constructor
 -First Render

 -Second Child Constructor
 -Second Child Render

 -Third Child Constructor
 -Third Render
 
 <DOM UPDATED -IN SINGLE BATCH>

 -First Child Component Did Mount

 -Second Child Component Did Mount

 -Third Child Component Did Mount

 -Parent Comopnent Did mount


*/

// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <h2>This is a namaste web series</h2>
//       {/* <User name= {"Yogesh Sharma (function)"} /> */}
//       <UserClass name={"Yogesh Sharma (Class)"} location={"Faridabad Class"} />
//     </div>
//   );
// };

export default About;
