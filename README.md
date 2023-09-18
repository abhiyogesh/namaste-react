use Extension JSON Viewer
CORS chrome extension
auto rename Tag
Better Comments
Bracket Pair Colorization Toggler
Color Highlight
Copy Text
Emoji
ES7 React/Redux/GraphQL/React-Native snipptes
File & Folder Icons
Highlight
Live Server
Simple React Snippets
Sublime Text Keymap
Text
Text Power Tools
Thunder Client
Txt Syntax
vscode-icons
Tailwind VS Code Exntension
Tailwind CSS intellisense
-----------------------------------------------------------------------------------------------------------------
This course consist :
React Hooks
✅ State Management
✅ Config Drive UI
✅ Redux
✅ Reusable Components
✅ Rich and Interactive UI
✅ Functional Comp.
✅ Props & State
✅ List & Keys
✅ Class Components
✅ Scaling React Apps
✅ Best Coding Practices
✅ React Router
✅ Optimizing React Apps
✅ Building Live Projects
✅ Bundlers & Babel
✅ JSX
✅ React.Fragment
✅ Code Splitting
✅ Dynamic UI
✅ Higher Order Comp.
✅ Pure Components
✅ Code Splitting
✅ React Testing Library
✅ Interview Questions
✅ Uncontrolled Comp.
✅ Building Custom Hooks
✅ Handling Events
✅ Conditional Rendering
✅ Tailwind CSS
and so much more
---------------------------------
React Interview Questions :

0. What is Lifting State Up in React?
1. What is React context?
2. What are different ways to add CSS in your app?
3. What is Hot Module Replacement?
4. What is the use of Parcel, Vite, Webpack?
5. How does create-react-app work?

6. What is Tree Shaking?
7. Difference b/w dependency and devDependency
8. What is npx and npm?
9. Difference b/w package .json and package-lock .json
10. Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent());

11. What is React.Fragment?
12. What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
13. What if 2 components are given will the state change in one component will effect the other component’s state (child)?
14. What is the use of return in useEffect ?
15. Difference b/w client-side routing and server-side routing?

16. Explain the concept of code splitting and its benefits in React.
17. How does React handle routing and navigation?
18. What are higher-order components (HOC) in React?
19. What are controlled and uncontrolled components?
20. Explain the concept of reconciliation in React.
1. How does React Fiber improve performance in React applications?
2. Explain the concept of code splitting and its benefits in React.
3. What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?
4. Describe the concept of render props and its use cases in React.
5. How can you optimize the rendering of large lists in React?

6. Explain the concept of memoization and its importance in React.
7. What is the purpose of the useEffect() hook in React and how does it work?
8. How does React handle routing and navigation?
9. How can you handle asynchronous operations in React using async/await?
10. Explain the concept of the Context API in React and its benefits.

11. What is the role of higher-order components (HOC) in React and how can you implement them?
12. Describe the concept of controlled and uncontrolled components in React forms.
13. How does React handle state management in large-scale applications?
14. Explain the concept of suspense in React and its use cases.
15. What are the different ways to handle side effects in React using hooks?

16. Explain the concept of reconciliation in React.
17. How can you prevent unnecessary re-renders in React?
18. What are the different ways to style components in React?
19. What are the key considerations when implementing a scalable React application?
20. Describe the concept of reusability, modularity, testablity in React components.
21. Diff btw onClick={handleItem} , onClick ={()=> handleItem(item)}, onClick = {handleItem(item)}

onClick = {handleItem(item)} // this is calling a function right away
 onClick ={()=> handleItem(item)} // this is a callback function

---------------------

# ---------------------------------Class-1------------------------------------------------------------------------------
# Namaste React :-
# Emmet in VS Code
# for basic html code structure write
# html: then enter
# CDN - it is a place where react library hosted
# what is CDN & why we use CDN?
# ----------------------------------------------------------------------------------------------------------------------

# git Configurations :-
-git init
-git branch -M main
-git add .
-git commit -m "message"
-git remote add origin "path of repository"
-git push origin main
-what is npm?
-npm full form is not node package manager ,go to npmjs.com
-npm init - will create package.json file
-why do we need Package.json file?
-it is a configuration for npm ,

# what is bundler?🚀
- we are using parcel bundler
# two type of dependcies
- dev(for development)
- normal(prod)
-npm install -D parcel
-npx parcel index.html(npx- it is mean executing a package) - executing a package name
-parcel created a server for us and hosted our app and give port 1234( http://localhost:1234)

# Parcel Doing-
-Dev Build
- Local Server
- HMR - Hot Module Replacement( doing file watching and whenever any file changes ,automatically refreshes the page)
 # HMR uses a File Watching Algorithm - written in C++
-Parce is doing Caching - for Faster builds
- Image Opitimization
-Minification
-Bundling
-Compressing file
-Consistent Hashing
-Code Splitting
-Differential bundling - to support older browsers
-Diagnostic
-Error Handling
-Https
-Tree Shaking - remove unused code
- Different dev and prod bundles
# for creating prod build(npx parcel build index.html)
- transpiling(babel is doing)
# difference bw tilde(~) and caret(^)
- ^ - where there is a minor upgrade in the version , it will install the minor version not major upgrade , it install itself.
- ~ when there is major upgrade.

# what is package.lock json?
-it keeps track of what version is installed in your project.

# what is gitignore file?
- it is a file which is used for ignoring any file/foler , which you dont want to push into your repository/branch.
-whatever you can regenerate do not push on git.

# react installation -
- npm install react
- import in your JS file -> import React from 'react';
- npm install react-dom
-import in your JS file ->import ReactDOM from 'react-dom/client';

# React Elements -
-An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.
-React.CreateElement.
-props - properties

# Components :
1.Functional Components
2.Class based Components

#concept called config driven UI

# Namaste Food
*Header
-logo
-Nav items
*Body
-Search
-Restraunt Container
-Restraunt Card

_Footer
-Copyright
-Links
-Address
-Contact
_/

# Two Types of Export/Import
-Default Export/Import
-export Default component;
-import component from "path";

-Name Export/Import
-export const Component;
-import {Component} from "path";


# ------------------------------Class-5------------------------------------------------------------------------------
# React Hooks
-hooks : it is a normal js utility or helper function.we can use  react/predefined hooks in function components only , not in class based components
-useState()
-useEffect()
-useContext()
-useParams()
-useDispatch()
-useNavigate()
# State(Existing Condition): It is a basic hook which helps in maintain the states for previous value and updated value.

syntax : const [state, setState] = useState(initialState);

-state : it is a variable in which any value pass.
-setState : it is a function which will update the value for state variable.
-initialState : it is the initial value for state variable.
# useState Use Cases/guidance :
1.Never create the state variables outside of the component.Always call it inside the functional component.
2.Always call and create state variables on the top of the function component(when function starts).because js is a synchronous single threaded language. it executes code line by line , so to avoid errors create on the top.
3.Never use/create state variables with if else condition.
4.Never use/create state variables inside for loop , inside functions.

we useState for rerendering the component/UI

# Why React is so fast?
React can find out the difference B/W virtual DOMs and update them(Core of React Algorithm)
React is fast due to DOM manupulation
it keeps in sync your data layer & UI layer.
Virtual DOM
Reconciliation
React Fiber
Diff Algorithm

Reconciliaton algorithm/React Fiber :
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

# ---------------------------------------------Class-6------------------------------------------------------------
# Monolith vs MicroService code architecture : explore it.

# ueEffect hook :first the component render, as soon as render cycle finished , it calls the callback function
UseEffect is called with two arguements one is callback function & other is dependency array.
When useEffect called?
Three cases :

1.  if no dependency array , it is called on every rendering of the component
    e.g : useEffect(()=>{});
2.  If dependency array is empty , useEffect is called on initial render.(just once).
    e.g :useEffect(()=>{},[]);
    3.if dependency array is having value/stateVariables , useEffect called everytime when value/variable changes
    e.g :useEffect(()=>{},[value/stateVariables]);
    syntax :
    useEffect(()=>{},[]);

# Shimmer UI : for better user experience creates a mock up pages till api loads the data.


# --------------------------------------------------------class-7----------------------------------------------------
# Routing :
npm install react-router-dom (version will be 6.4)
create a routing configuration in app.js (App router)
check App.js file
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
Outlet
errorElement
Children routes
Link - we use link instead of anchor tag<a> because it nor refreshes the page. (behind the scenes link using anchor tag). Link is a wrapper over anchor tag.
Client side routing vs server side routing
SPA
# Dynamic routing- different pages for different restraunt
2 types of routing :
1-Client side routing
2-Server side routing

# ------------------------------------------------Class-8----------------------------------------------------

# Class based components :
Asked in the interview because of old projects
Que : why do we have to write super(props) in the classs based components?

- when a class is instantiated/class loads , a new instance created then constructed called then render then componentDidMount then ComponentDidUpdate then ComponentWillUnmount
  *Component did mount we used to make API call's once our component is mounted/loaded.
  *React will batch the render phase in reactt lifecycle hooks
  In lifecycle React is batching up the render phase of multiple childrens.
  Once the commit phase start React tries to update the DOM. DOM manipulation
  is the most expensive thing when we are updating a component it takes a lot of time.

What is Render phase ?-
In Render phase ,React is triggering the reconcialiation phase/process in which it finds out the difference between
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

-First Child Component Did Mount

-Second Child Component Did Mount

-Third Child Component Did Mount

-Parent Comopnent Did mount

*/

# -----------------------------------------Class-9---------------------==================================================
# Single Responsibility Principle 
-Modularity
-Reusable
-Maintainable
-Testable

-custom hooks
-they are also utility javacript function
-Always create custom hooks with pre name 'use'.
-While creating the custom hooks, first finalise the contract of the hooks
e.g. what will be the input of the hooks & what will be the output of the hooks

-optimising app includes -
-Bundling
-Chunking//Code Splitting// Dynamic Bundling
-Lazy loading/On Demand loading/ dynamic import
*For shortening the bundle size , we do code splitting like lazy loadnig

Separate bundle for separate compnent/features

--index.js:1 React Router caught the following error during render Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
Note : this error will come while using the lazy loading , you have to resolve using 'suspense' component
-'fallback' in lazy uses for like spinner or loader


# -----------------------------------------Class 10 ----------------------------------------------------------
# These are UI CSS libraries
-Use Styled components for CSS
https://styled-components.com/docs/basics

-material UI
https://mui.com/

-bootstrap
https://getbootstrap.com/

-chakra ui
https://chakra-ui.com/

-ant design
https://ant.design/

-Latest framework -> Tailwind CSS
-https://tailwindcss.com/
Tailwind CSS gives you classname automatically write in your app.
pros :
-You dont move between the two files.
-pre defined css class name.

cons :
-initial learning.
-readability issue.
-code looks ugly.

# -----------------------------------------------Class 11- Data is the new oil------------------------------------
-Higher Order Funtions :
-Controlled Components : the components which is controlled by parent components.
-Uncontrolled Components : the components which is not controlled by parent components.
-Lifting the state up - we use this control our children components
-Props drilling : There are lots of components and hierachy of components , there are level of nesting compoentn
-context API

-Higher Order Funtions : takes a component and returns a component(we will use to show promoted feature on the cardss).
It act as a enhancer function.Higher orders are pure functions, it will not change the behaviour of cards in anyway, or we are not doing any modification

There are two layers in React app :
1. UI layer(JSX) which is static.
2. Data layer.

Note* : -UI layer is powered by data layer
        -data layer is consist of state, props , local variables

We will learn how to manager your data correctly in react app in class 10.

//["@type"] - when we are not proper naming convention for properties in javascript we write like this , e.g here @ coming in front of type

-Props drilling : There are lots of components and hierachy of components , there are level of nesting components,
passing data between the components , in react data flow in one way direction

search in react dev documents  -> The problem with passing props

React Context/Context API : removing the problem of props drilling.
We use context as a global place where your data is kept and anybody can access it known as react context.

we can use hooks in function components only , not in class based components

context  has three parts :
1.create -> check userContext.js file
2.Read -> check header.js , about.js file
3.Modify/Update -> check App.js file

- # We can provide the data for all the components or we can pass only for small portion also. Check App.js file

# ----------------------------Class-12-Redux--------------------------------------------------------------------------
- # Earlier we were using the vanilla redux in older applications
-Zustand also a data managment library.
-React and Redux are different libraries.
-Redux offers easy debugging

# React-Redux library is kind of a bridge between react and redux.


# Redux Toolkit
- Install libraries @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

# reduxjs toolkit library has things to do with redux , to it will create store(ConfigureStore) and react-redux will help us in creating bridge betweeen react app and redux store (Provider)


- # Mistakes while creating and using the store :
- # Whenever you are doing make sure you are subscribing the right portion of the store to do the opitimizing app. -> this is for telling the interviewer for telling important point to impress. So do not subscribe full store because it will impact app's performance.

- # reducer is for whole app store & reducers will have multiple functions in slice.
- # reducer is a combination of reducers in slice.
- # Redux  behind the scenes use the immer library for finding the difference between original state & mutate state and gives the new state which is immutable state. https://immerjs.github.io/immer/



# -------------------------Class 13 - Testing ---------------------------------------------------------
 # Types of testing(developer)
 -Unit testing - testing one component/feature in isolation -> sum.js , contact.js , header.js , restaurantCard.js
 -Integration testing - integration of multiple components
 -End to End - e2e testing -

 https://testing-library.com/docs/react-testing-library/intro/

 # React Testing Library
 -Uses jest - delightful javascript testing framework

# Setting up testing library in our app
# Steps :-n
 -npm install : --save-dev @testing-library/react
 -npm install : -D jest
 -npm install : --save-dev babel-jest @babel/core @babel/preset-env
 -Configure Babel
 -Configure Parcel Config file to disable default babel transpilation
 -Writing jest Configuration : - npx jest --init -> jsdom
 jsdom : while executing test case , there is no server running , there is not browser , these cases does not run on browser ,will not run on google chrome , they will be needing a environment , they need a runtime where these test cases will be executed.
 -Install jsdom library : -npm install --save-dev jest-environment-jsdom
in the folder __tests__  ' __' -> known as dunder
-Install @babel/preset-react - to make JSX work in test cases
-Include babel/preset-react inside my babel config
-Install @testing-library-jest-dom 
-When you do getAllByRole it will give you react element , react fiber node
- it & test both are same thing