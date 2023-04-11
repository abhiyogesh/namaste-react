import React from 'react';
import ReactDOM from  'react-dom/client';

//EP-1 Inceptoion
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

// episode  - Igniting the APP
// const  parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is Namaste React 🚀"),React.createElement("h2",{},"I am h2 tag")]),
// React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//EP-3 -> Layouting the foundation
 //JSX => React.createElement(it is converted by babel into React.createElement) =>Object => HTML(render)
 
 //React Element
// const heading =(
//     <h1 className='head' tabIndex="5">
//         Namaste React using JSX 🚀
//     </h1>
// )
//const root  = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//React Component
//Class Based Components
//Functional Components

//React Elment
const Title = ()=>(
    <h1 className='head' tabIndex="5">
        Namaste React using JSX 🚀
     </h1>
 )

//React Functional Component
 //{title} -> this is how you put react element into component
 //React Fragments - behaves like an empty tag because JSX has only one parent element , we can write like React.Fragment or <></>
const HeadingComponent = () => (
    <>  
 <div id="container1">
    <Title />
    {Title()}
    <Title></Title>
 <h1 className='heading'>Namaste React Functional Component1</h1>
 </div>
 <div id="container2">
 <Title />
 {Title()}
 <Title></Title>
<h1 className='heading'>Namaste React Functional Component2</h1>
</div>
</>
    
);

// for rendering a component
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);