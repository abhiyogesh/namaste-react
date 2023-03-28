
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React"); // to create html element using react
// //  {} - this blank object is for giving html attributes for html elements
// //heading : In the heading , the react object will return and render function will create the h1 tag and put into the dom
// const root = ReactDOM.createRoot(document.getElementById("root")); // to create root using react dom
// root.render(heading); // rendering the heading into dom

// 1.How to create nested ,sibling html structure using React?
// <div id= "parent">
//     <div id="child">
//         <h1>I am an h1 tag</h1>
// {/* <h2>I am an h1 tag</h2> */} - sibling structure
//     </div>
// </div>

const  parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);