#Namaste React
git init
git branch -M main
git add .
git commit -m "message"
git remote add origin "path of repository"
git push origin main
what is npm?
npm full form is not node package manager ,go to npmjs.com
npm init - will create package.json file
why do we need Package.json file?
-it is a configuration for npm , 

what is bundler?🚀
- we are using parcel bundler
two type of dependcies
- dev(for development)
- normal(prod)
 -npm install -D parcel
 -npx parcel index.html(npx- it is mean executing a package) - executing a package name
 parcel created a server for us and hosted our app and give port 1234( http://localhost:1234)

 #Parcel Doing-
 -Dev Build
- Local Server
- HMR - Hot Module Replacement( doing file watching and whenever any file changes ,automatically refreshes the page)
  HMR uses a File Watching Algorithm - written in C++
-Parce is doing Caching -  for Faster builds
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
for creating prod build(npx parcel build index.html)
transpiling(babel is doing)
difference bw tilde(~) and caret(^)
^ - where there is a minor upgrade in the version , it will install the minor version  not major upgrade , it install itself.
~ when there is major upgrade.

what is package.lock json?
-it keeps track of what version is installed in your project.

what is gitignore file?
- it is a file which is used for ignoring any file/foler , which you dont want to push into your repository/branch.
-whatever you can regenerate do not push on git.


react installation -
1. npm install react
- import in your JS file -> import React from 'react';
2.npm install react-dom
-import in your JS file ->import ReactDOM from  'react-dom/client';


props

concept called config driven UI

#Namaste Food
/*
*Header
-logo
-Nav items
*Body
-Search
-Restraunt Container
-Restraunt Card

*Footer
-Copyright
-Links
-Address
-Contact
*/

Two Types of Export/Import

-Default Export/Import

export Default component;
import component from "path";


-Name Export/Import

export const Component;
import {Component} from "path";

#React Hooks

#hooks : it is a normal js utility or helper function.
-useState()
-useEffect()
#State(Existing Condition): It is a basic hook which helps in maintain the states for previous value and updated value.

syntax : const [state, setState] = useState(initialState);

state : it is a variable in which any value pass.
setState : it is a function which will update the value for state variable.
initialState : it is the initial value for state variable.

we useState for rerendering the component/UI

React is fast due to DOM manupulation
it keeps in sync your data layer & UI layer.
Virtual DOM
Reconciliation
React Fiber
Diff Algorithm


Reconciliaton algorithm/React Fiber :

suppose we have a DOM

