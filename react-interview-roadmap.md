# React Interview Preparation Roadmap 🚀

## Table of Contents
1. [Core Concepts](#core-concepts)
2. [Components & Props](#components--props)
3. [State & Lifecycle](#state--lifecycle)
4. [Hooks](#hooks)
5. [Event Handling](#event-handling)
6. [Conditional Rendering](#conditional-rendering)
7. [Lists & Keys](#lists--keys)
8. [Forms](#forms)
9. [Routing](#routing)
10. [State Management](#state-management)
11. [Performance Optimization](#performance-optimization)
12. [Testing](#testing)
13. [Advanced Patterns](#advanced-patterns)
14. [Common Interview Questions](#common-interview-questions)

---

## Core Concepts

### 1. What is React?
**Answer:** React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and can be used for developing both web and mobile applications.

**Key Features:**
- **Virtual DOM**: React uses a virtual DOM to improve performance
- **Component-Based**: UI is broken down into reusable components
- **Unidirectional Data Flow**: Data flows from parent to child components
- **JSX**: JavaScript XML syntax for writing components

### 2. Virtual DOM vs Real DOM
**Answer:** 
- **Real DOM**: The actual DOM tree in the browser
- **Virtual DOM**: A lightweight copy of the real DOM in memory

**How it works:**
1. React creates a virtual DOM when state changes
2. Compares virtual DOM with previous version (diffing)
3. Updates only the changed parts in the real DOM
4. This process is called "reconciliation"

**Benefits:**
- Faster than direct DOM manipulation
- Batch updates for better performance
- Cross-platform compatibility

---

## Components & Props

### 3. What are Components?
**Answer:** Components are the building blocks of React applications. They are reusable pieces of UI that can contain their own logic and styling.

**Types:**
- **Functional Components**: JavaScript functions that return JSX
- **Class Components**: ES6 classes that extend React.Component

**Example:**
```jsx
// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 4. What are Props?
**Answer:** Props (properties) are read-only data passed from parent to child components. They are immutable and help components communicate with each other.

**Key Points:**
- Props are read-only (cannot be modified by child)
- Props can be any type (strings, numbers, objects, functions)
- Props are passed down the component tree

**Example:**
```jsx
function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}

// Usage
<UserProfile 
  name="John Doe" 
  email="john@example.com" 
  onEdit={() => console.log('Edit clicked')} 
/>
```

### 5. Props vs State
**Answer:**

| Props | State |
|-------|-------|
| Read-only | Mutable |
| Passed from parent | Managed within component |
| Cannot be changed by component | Can be changed using setState |
| Used for data flow | Used for component's internal data |

---

## State & Lifecycle

### 6. What is State?
**Answer:** State is a component's internal data that can change over time. When state changes, the component re-renders.

**Key Concepts:**
- State is always an object
- State updates are asynchronous
- State should be treated as immutable
- Use setState() to update state

**Example:**
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### 7. Component Lifecycle Methods
**Answer:** Lifecycle methods are special methods that run at different stages of a component's existence.

**Mounting Phase:**
- `constructor()`: Initialize state and bind methods
- `getDerivedStateFromProps()`: Update state based on props
- `render()`: Return JSX
- `componentDidMount()`: Side effects after mounting

**Updating Phase:**
- `getDerivedStateFromProps()`: Update state based on new props
- `shouldComponentUpdate()`: Control re-rendering
- `render()`: Re-render component
- `getSnapshotBeforeUpdate()`: Capture information before update
- `componentDidUpdate()`: Side effects after update

**Unmounting Phase:**
- `componentWillUnmount()`: Cleanup before unmounting

**Example:**
```jsx
class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // Fetch data when component mounts
    fetch('/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Log when component updates
    if (prevState.data !== this.state.data) {
      console.log('Data updated:', this.state.data);
    }
  }

  componentWillUnmount() {
    // Cleanup when component unmounts
    console.log('Component will unmount');
  }

  render() {
    return <div>{this.state.data ? 'Data loaded' : 'Loading...'}</div>;
  }
}
```

---

## Hooks

### 8. What are Hooks?
**Answer:** Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8.

**Rules of Hooks:**
- Only call hooks at the top level
- Only call hooks from React functions
- Hook names must start with "use"

### 9. useState Hook
**Answer:** `useState` is a hook that allows functional components to have state.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

**Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name" 
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

### 10. useEffect Hook
**Answer:** `useEffect` is a hook that handles side effects in functional components (equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount).

**Syntax:**
```jsx
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);
```

**Examples:**
```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Run once when component mounts
  useEffect(() => {
    fetchUser(userId);
  }, []); // Empty dependency array

  // Run when userId changes
  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]); // userId as dependency

  // Cleanup on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  const fetchUser = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users/${id}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

### 11. Other Important Hooks

**useContext:**
```jsx
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}
```

**useReducer:**
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

**useMemo & useCallback:**
```jsx
import React, { useMemo, useCallback, useState } from 'react';

function ExpensiveComponent({ items, onItemClick }) {
  // Memoize expensive calculation
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  // Memoize callback function
  const handleClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      {items.map(item => (
        <button key={item.id} onClick={() => handleClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
```

---

## Event Handling

### 12. How to Handle Events in React?
**Answer:** React events are named using camelCase and pass a synthetic event object.

**Key Points:**
- Events are camelCase (onClick, onChange, onSubmit)
- Synthetic events are cross-browser compatible
- Event handlers receive a synthetic event object
- Use arrow functions or bind to preserve 'this' context

**Examples:**
```jsx
function EventHandling() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked!');
  };

  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      
      <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Type something" 
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

---

## Conditional Rendering

### 13. How to Render Components Conditionally?
**Answer:** React supports several ways to render components conditionally.

**Methods:**
1. **Ternary Operator**
2. **Logical AND (&&)**
3. **If statements outside JSX**
4. **Switch statements**

**Examples:**
```jsx
function ConditionalRendering({ isLoggedIn, userRole, showAdmin }) {
  // Method 1: Ternary Operator
  const greeting = isLoggedIn ? 'Welcome back!' : 'Please log in';

  // Method 2: Logical AND
  const adminPanel = showAdmin && <AdminPanel />;

  // Method 3: If statements
  let content;
  if (userRole === 'admin') {
    content = <AdminDashboard />;
  } else if (userRole === 'user') {
    content = <UserDashboard />;
  } else {
    content = <GuestView />;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      
      {isLoggedIn ? (
        <UserProfile />
      ) : (
        <LoginForm />
      )}
      
      {adminPanel}
      {content}
    </div>
  );
}
```

---

## Lists & Keys

### 14. How to Render Lists in React?
**Answer:** Use JavaScript's map() function to render lists of elements. Each element should have a unique "key" prop.

**Key Points:**
- Keys help React identify which items have changed
- Keys should be stable, unique, and predictable
- Avoid using array index as key (unless list is static)
- Keys are not passed to components as props

**Example:**
```jsx
function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none' 
          }}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// Usage
const todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build app', completed: true },
  { id: 3, text: 'Deploy', completed: false }
];
```

---

## Forms

### 15. How to Handle Forms in React?
**Answer:** React forms can be controlled (React manages state) or uncontrolled (DOM manages state).

**Controlled Components:**
```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Uncontrolled Components:**
```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Routing

### 16. How to Implement Routing in React?
**Answer:** Use React Router for client-side routing in React applications.

**Basic Setup:**
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Users() {
  return <h1>Users List</h1>;
}

function UserDetail() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

---

## State Management

### 17. What are the Different State Management Solutions?
**Answer:** React offers several approaches for state management depending on application complexity.

**1. Local State (useState/useReducer):**
- For component-level state
- Simple applications

**2. Context API:**
- For sharing state across component tree
- Medium complexity applications

**3. Redux:**
- For complex state management
- Large applications with complex state logic

**4. Zustand:**
- Lightweight alternative to Redux
- Simple API with minimal boilerplate

**Context API Example:**
```jsx
import React, { createContext, useContext, useReducer } from 'react';

// Create context
const AppContext = createContext();

// Initial state
const initialState = {
  user: null,
  theme: 'light',
  notifications: []
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    default:
      return state;
  }
}

// Provider component
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use context
function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

// Components using context
function Header() {
  const { state, dispatch } = useAppContext();
  
  return (
    <header>
      <h1>Welcome, {state.user?.name || 'Guest'}</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Current theme: {state.theme}
      </button>
    </header>
  );
}

function App() {
  return (
    <AppProvider>
      <Header />
      {/* Other components */}
    </AppProvider>
  );
}
```

---

## Performance Optimization

### 18. How to Optimize React Performance?
**Answer:** Several techniques can improve React application performance.

**1. React.memo:**
```jsx
import React from 'react';

const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={onUpdate}>Update</button>
    </div>
  );
});
```

**2. useMemo:**
```jsx
import React, { useMemo } from 'react';

function ExpensiveCalculation({ items }) {
  const expensiveResult = useMemo(() => {
    return items.reduce((sum, item) => {
      // Simulate expensive calculation
      for (let i = 0; i < 1000000; i++) {
        sum += item.value;
      }
      return sum;
    }, 0);
  }, [items]);

  return <div>Result: {expensiveResult}</div>;
}
```

**3. useCallback:**
```jsx
import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleChildClick = useCallback(() => {
    console.log('Child clicked');
  }, []); // Empty dependency array - function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleChildClick} />
    </div>
  );
}

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});
```

**4. Code Splitting:**
```jsx
import React, { lazy, Suspense } from 'react';

// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

---

## Testing

### 19. How to Test React Components?
**Answer:** Use testing libraries like Jest and React Testing Library for testing React components.

**Setup:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Example Tests:**
```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders counter with initial value', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments counter when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');
    
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('handles user input', async () => {
    render(<Counter />);
    const input = screen.getByPlaceholderText('Enter name');
    
    await userEvent.type(input, 'John Doe');
    expect(screen.getByText('Hello, John Doe!')).toBeInTheDocument();
  });
});
```

---

## Advanced Patterns

### 20. Higher-Order Components (HOCs)
**Answer:** HOCs are functions that take a component and return a new component with additional props or behavior.

**Example:**
```jsx
import React from 'react';

// HOC for adding authentication
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = checkAuthStatus(); // Some auth check

    if (!isAuthenticated) {
      return <div>Please log in to continue</div>;
    }

    return <WrappedComponent {...props} isAuthenticated={true} />;
  };
}

// HOC for adding loading state
function withLoading(WrappedComponent) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Usage
const AuthenticatedUserProfile = withAuth(UserProfile);
const LoadingUserProfile = withLoading(AuthenticatedUserProfile);
```

### 21. Render Props Pattern
**Answer:** Render props is a pattern where a component receives a function as a prop that determines what to render.

**Example:**
```jsx
import React from 'react';

function Mouse({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

function App() {
  return (
    <div>
      <Mouse
        render={({ x, y }) => (
          <h1>
            Mouse position: {x}, {y}
          </h1>
        )}
      />
    </div>
  );
}
```

### 22. Custom Hooks
**Answer:** Custom hooks are functions that use other hooks and can be shared between components.

**Example:**
```jsx
import { useState, useEffect } from 'react';

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(`/api/users/${userId}`);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={theme}>
      <h1>{user.name}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

## Common Interview Questions

### 23. What is the difference between controlled and uncontrolled components?
**Answer:** 
- **Controlled**: React state controls the component's value and updates
- **Uncontrolled**: DOM handles the component's value internally

**Controlled Example:**
```jsx
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

**Uncontrolled Example:**
```jsx
const inputRef = useRef();
<input ref={inputRef} defaultValue="initial" />
```

### 24. What is the difference between state and props?
**Answer:** 
- **State**: Internal data managed by the component, can change
- **Props**: External data passed from parent, read-only

### 25. What is the purpose of the key prop in lists?
**Answer:** Keys help React identify which items have changed, been added, or been removed, improving performance during re-renders.

### 26. What is the difference between useEffect and useLayoutEffect?
**Answer:** 
- **useEffect**: Runs after the browser has painted (asynchronous)
- **useLayoutEffect**: Runs synchronously after all DOM mutations (blocking)

### 27. How do you prevent unnecessary re-renders?
**Answer:** 
- Use React.memo for component memoization
- Use useMemo for expensive calculations
- Use useCallback for function memoization
- Optimize state structure
- Use proper dependency arrays in useEffect

### 28. What is the difference between shallow and deep comparison?
**Answer:** 
- **Shallow**: Compares references (===)
- **Deep**: Compares actual values

React uses shallow comparison by default for performance reasons.

### 29. How do you handle errors in React?
**Answer:** 
- Use Error Boundaries for class components
- Use try-catch in event handlers
- Use error states in functional components
- Handle async errors in useEffect

### 30. What is the difference between useCallback and useMemo?
**Answer:** 
- **useCallback**: Memoizes functions
- **useMemo**: Memoizes values

---

## Practice Projects

### Beginner Level:
1. **Todo List App** - Practice state management and CRUD operations
2. **Counter App** - Learn hooks and event handling
3. **Form Validation** - Master form handling and validation
4. **Simple Calculator** - Practice conditional rendering and state

### Intermediate Level:
1. **E-commerce Product List** - Learn routing, API calls, and state management
2. **Weather App** - Practice external API integration and async operations
3. **Blog App** - Learn CRUD operations, forms, and data persistence
4. **Task Management App** - Practice complex state management and user interactions

### Advanced Level:
1. **Real-time Chat App** - Learn WebSockets, real-time updates, and complex state
2. **Social Media Clone** - Practice advanced patterns, optimization, and scalability
3. **Dashboard Application** - Learn data visualization, charts, and complex layouts
4. **Full-stack Application** - Integrate React with backend APIs and databases

---

## Resources for Further Learning

### Official Documentation:
- [React Official Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)

### Online Courses:
- React Fundamentals on Frontend Masters
- Advanced React Patterns on Egghead
- React Testing on Kent C. Dodds Blog

### Books:
- "Learning React" by Alex Banks and Eve Porcello
- "React Design Patterns and Best Practices" by Carlos Santana Roldán
- "Testing JavaScript" by Kent C. Dodds

### Practice Platforms:
- [CodeSandbox](https://codesandbox.io/)
- [CodePen](https://codepen.io/)
- [LeetCode](https://leetcode.com/) (for algorithm practice)
- [HackerRank](https://www.hackerrank.com/)

---

## Interview Preparation Tips

### 1. **Understand the Fundamentals**
- Master JavaScript ES6+ features
- Understand React's core concepts thoroughly
- Practice building small components from scratch

### 2. **Practice Coding**
- Build projects mentioned above
- Practice common algorithms and data structures
- Use platforms like CodeSandbox for quick prototyping

### 3. **Know Your Tools**
- Understand build tools (Webpack, Vite)
- Know testing libraries (Jest, React Testing Library)
- Be familiar with state management solutions

### 4. **System Design**
- Practice designing component hierarchies
- Understand data flow in React applications
- Know when to use different patterns

### 5. **Performance**
- Understand React's rendering process
- Know optimization techniques
- Be able to identify performance bottlenecks

### 6. **Real-world Experience**
- Build and deploy real applications
- Contribute to open source projects
- Understand deployment and CI/CD

---

This roadmap covers the essential topics you'll need to master for React interviews. Focus on understanding the concepts deeply rather than memorizing answers, and practice building real applications to reinforce your learning.

Good luck with your React interview preparation! 🚀