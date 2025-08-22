# Complete React Interview Preparation Roadmap

## Table of Contents
1. [React Fundamentals](#react-fundamentals)
2. [Components & JSX](#components--jsx)
3. [Props & State](#props--state)
4. [React Hooks](#react-hooks)
5. [Event Handling](#event-handling)
6. [Conditional Rendering & Lists](#conditional-rendering--lists)
7. [State Management](#state-management)
8. [Performance Optimization](#performance-optimization)
9. [Testing](#testing)
10. [Advanced Patterns](#advanced-patterns)
11. [React Ecosystem](#react-ecosystem)
12. [Practical Coding Challenges](#practical-coding-challenges)
13. [System Design Questions](#system-design-questions)

---

## React Fundamentals

### Core Concepts

#### What is React?
React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is maintained by Meta and the community.

**Key Features:**
- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Declarative**: Describe what the UI should look like for any given state
- **Learn Once, Write Anywhere**: Can be used for web, mobile (React Native), and desktop

#### Virtual DOM
The Virtual DOM is a JavaScript representation of the real DOM. React uses it to optimize updates by:
1. Creating a virtual representation of the UI in memory
2. When state changes, creating a new virtual DOM tree
3. Comparing (diffing) the new tree with the previous one
4. Updating only the parts of the real DOM that actually changed

### Interview Questions & Answers

**Q1: What are the advantages of React over vanilla JavaScript?**

**Answer:**
- **Component Reusability**: Write once, use anywhere
- **Virtual DOM**: Better performance through efficient updates
- **Declarative Programming**: Easier to understand and debug
- **Rich Ecosystem**: Vast library of third-party packages
- **Strong Community**: Large community support and resources
- **Developer Tools**: Excellent debugging tools
- **SEO Friendly**: Server-side rendering capabilities

**Q2: What is the difference between React and ReactDOM?**

**Answer:**
- **React**: Core library that contains the logic for creating and managing components, state, and lifecycle methods
- **ReactDOM**: Rendering library that provides DOM-specific methods for React components

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

// React - creating components
const App = () => <h1>Hello World</h1>;

// ReactDOM - rendering to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Q3: What is JSX and why do we use it?**

**Answer:**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.

**Benefits:**
- More readable and expressive
- Compile-time error checking
- Prevents XSS attacks through automatic escaping
- Familiar syntax for developers with HTML experience

```javascript
// Without JSX
React.createElement('h1', {className: 'title'}, 'Hello World');

// With JSX
<h1 className="title">Hello World</h1>
```

---

## Components & JSX

### Concepts

#### Functional vs Class Components

**Functional Components (Recommended):**
```javascript
const MyComponent = (props) => {
  return <div>Hello {props.name}</div>;
};
```

**Class Components (Legacy):**
```javascript
class MyComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

#### JSX Rules
1. Must return a single parent element (or Fragment)
2. Use `className` instead of `class`
3. Use `htmlFor` instead of `for`
4. Self-closing tags must end with `/>`
5. JavaScript expressions in curly braces `{}`

### Interview Questions & Answers

**Q1: What are the differences between functional and class components?**

**Answer:**
| Functional Components | Class Components |
|----------------------|------------------|
| Simpler syntax | More verbose |
| Use hooks for state/lifecycle | Built-in state and lifecycle methods |
| No `this` keyword | Uses `this` keyword |
| Better performance | Slightly more overhead |
| Easier to test | More complex testing |
| Recommended approach | Legacy approach |

**Q2: What are React Fragments and why are they useful?**

**Answer:**
Fragments let you group multiple elements without adding extra DOM nodes.

```javascript
// Without Fragment (adds extra div)
return (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);

// With Fragment (no extra wrapper)
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
);

// Short syntax
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

**Q3: What are the rules of JSX?**

**Answer:**
1. **Single Parent Element**: Must wrap multiple elements in a parent
2. **Proper Closing**: All tags must be properly closed
3. **CamelCase Attributes**: Use camelCase for attributes (onClick, not onclick)
4. **Reserved Words**: Use className instead of class, htmlFor instead of for
5. **JavaScript Expressions**: Use {} for JavaScript expressions
6. **No HTML Comments**: Use {/* */} for comments in JSX

---

## Props & State

### Concepts

#### Props
Props (properties) are read-only data passed from parent to child components.

```javascript
// Parent component
const Parent = () => {
  return <Child name="John" age={25} />;
};

// Child component
const Child = ({ name, age }) => {
  return <div>{name} is {age} years old</div>;
};
```

#### State
State is mutable data that belongs to a component and can trigger re-renders when changed.

```javascript
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

### Interview Questions & Answers

**Q1: What is the difference between props and state?**

**Answer:**
| Props | State |
|-------|-------|
| Read-only | Mutable |
| Passed from parent | Owned by component |
| External data | Internal data |
| Cannot trigger re-render directly | Triggers re-render when changed |
| Functional arguments | Hook or class property |

**Q2: How do you pass data from child to parent component?**

**Answer:**
Pass a callback function from parent to child through props.

```javascript
// Parent component
const Parent = () => {
  const [message, setMessage] = useState('');
  
  const handleChildData = (data) => {
    setMessage(data);
  };
  
  return (
    <div>
      <p>Message from child: {message}</p>
      <Child onSendData={handleChildData} />
    </div>
  );
};

// Child component
const Child = ({ onSendData }) => {
  const sendData = () => {
    onSendData('Hello from child!');
  };
  
  return <button onClick={sendData}>Send Data</button>;
};
```

**Q3: What is prop drilling and how can you avoid it?**

**Answer:**
Prop drilling is passing props through multiple component layers to reach a deeply nested component.

**Problem:**
```javascript
const App = () => {
  const user = { name: 'John' };
  return <Level1 user={user} />;
};

const Level1 = ({ user }) => <Level2 user={user} />;
const Level2 = ({ user }) => <Level3 user={user} />;
const Level3 = ({ user }) => <div>{user.name}</div>;
```

**Solutions:**
1. **Context API**
2. **State Management Libraries** (Redux, Zustand)
3. **Component Composition**
4. **Custom Hooks**

---

## React Hooks

### Core Hooks

#### useState
Manages local component state.

```javascript
const [state, setState] = useState(initialValue);

// Example
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });
```

#### useEffect
Handles side effects and lifecycle events.

```javascript
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);

// Examples
// Component did mount
useEffect(() => {
  console.log('Component mounted');
}, []);

// Component did update
useEffect(() => {
  console.log('Count changed');
}, [count]);

// Component will unmount
useEffect(() => {
  return () => {
    console.log('Component will unmount');
  };
}, []);
```

#### useContext
Consumes context values.

```javascript
const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value="dark">
    <Child />
  </ThemeContext.Provider>
);

const Child = () => {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
};
```

### Advanced Hooks

#### useReducer
Manages complex state logic.

```javascript
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};
```

#### useMemo
Memoizes expensive calculations.

```javascript
const ExpensiveComponent = ({ items, filter }) => {
  const expensiveValue = useMemo(() => {
    return items.filter(item => item.includes(filter))
                .map(item => item.toUpperCase());
  }, [items, filter]);
  
  return <div>{expensiveValue.join(', ')}</div>;
};
```

#### useCallback
Memoizes functions to prevent unnecessary re-renders.

```javascript
const Parent = ({ items }) => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback((id) => {
    console.log('Clicked item:', id);
  }, []); // No dependencies, function never changes
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {items.map(item => (
        <Child key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};
```

### Interview Questions & Answers

**Q1: What are React Hooks and what problems do they solve?**

**Answer:**
Hooks are functions that let you use state and other React features in functional components.

**Problems they solve:**
- **Complex Component Logic**: Easier to share stateful logic between components
- **Lifecycle Method Complexity**: Replace complex lifecycle methods with simpler effects
- **Class Component Confusion**: Eliminate confusion around `this` binding
- **Code Reuse**: Better code reuse through custom hooks

**Q2: What are the rules of hooks?**

**Answer:**
1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call hooks from React function components or custom hooks

```javascript
// ❌ Wrong
const Component = () => {
  if (condition) {
    const [state, setState] = useState(); // Don't do this
  }
  
  for (let i = 0; i < 10; i++) {
    useEffect(() => {}); // Don't do this
  }
};

// ✅ Correct
const Component = () => {
  const [state, setState] = useState();
  
  useEffect(() => {
    if (condition) {
      // Condition inside effect
    }
  });
};
```

**Q3: When would you use useReducer instead of useState?**

**Answer:**
Use `useReducer` when:
- State logic is complex with multiple sub-values
- Next state depends on the previous one
- You want to optimize performance for components that trigger deep updates
- You need more predictable state transitions

```javascript
// Complex state - better with useReducer
const [state, dispatch] = useReducer(reducer, {
  loading: false,
  data: null,
  error: null
});

// Simple state - fine with useState
const [count, setCount] = useState(0);
```

**Q4: What is the difference between useMemo and useCallback?**

**Answer:**
- **useMemo**: Memoizes the result of a computation
- **useCallback**: Memoizes the function itself

```javascript
const Component = ({ items, filter }) => {
  // useMemo - memoizes the computed value
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);
  
  // useCallback - memoizes the function
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);
  
  return (
    <div>
      {filteredItems.map(item => (
        <Item key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};
```

---

## Event Handling

### Concepts

#### SyntheticEvents
React wraps native events in SyntheticEvent objects to provide consistent behavior across browsers.

```javascript
const Button = () => {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Button clicked');
  };
  
  return <button onClick={handleClick}>Click me</button>;
};
```

#### Event Binding
Different ways to bind event handlers:

```javascript
// Arrow function (creates new function on each render)
<button onClick={() => handleClick(id)}>Click</button>

// Bind in constructor (class components)
this.handleClick = this.handleClick.bind(this);

// Arrow function method (class components)
handleClick = () => {
  // this is automatically bound
};

// useCallback (functional components)
const handleClick = useCallback(() => {
  // function logic
}, [dependencies]);
```

### Interview Questions & Answers

**Q1: What are SyntheticEvents in React?**

**Answer:**
SyntheticEvents are React's wrapper around native DOM events. They provide:
- **Cross-browser compatibility**: Same API across all browsers
- **Event pooling**: Reuse event objects for performance (removed in React 17)
- **Additional features**: Access to both native event and React-specific properties

```javascript
const handleSubmit = (event) => {
  event.preventDefault(); // SyntheticEvent method
  event.persist(); // Keep event object (React 16 and earlier)
  
  // Access native event
  console.log(event.nativeEvent);
};
```

**Q2: How do you pass parameters to event handlers?**

**Answer:**
Several approaches:

```javascript
// 1. Arrow function (creates new function each render)
<button onClick={() => handleClick(id)}>Click</button>

// 2. Bind method
<button onClick={handleClick.bind(this, id)}>Click</button>

// 3. Data attributes
<button data-id={id} onClick={handleClick}>Click</button>
const handleClick = (e) => {
  const id = e.target.dataset.id;
};

// 4. Closure (recommended)
const createClickHandler = (id) => () => {
  handleClick(id);
};
<button onClick={createClickHandler(id)}>Click</button>
```

---

## Conditional Rendering & Lists

### Concepts

#### Conditional Rendering
Multiple ways to conditionally render components:

```javascript
// 1. If-else
const Component = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
};

// 2. Ternary operator
const Component = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn ? <Dashboard /> : <Login />}
  </div>
);

// 3. Logical AND
const Component = ({ user }) => (
  <div>
    {user && <Welcome user={user} />}
  </div>
);

// 4. Switch case
const Component = ({ status }) => {
  switch (status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error />;
    case 'success':
      return <Data />;
    default:
      return null;
  }
};
```

#### Rendering Lists
Use `map()` to render lists of elements:

```javascript
const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
      </li>
    ))}
  </ul>
);
```

### Interview Questions & Answers

**Q1: Why do we need keys in React lists?**

**Answer:**
Keys help React identify which items have changed, been added, or removed. They enable efficient updates to the DOM.

**Without keys:**
- React re-renders entire list
- Poor performance
- Potential state issues

**With keys:**
- React can identify specific items
- Only changed items are updated
- Maintains component state correctly

```javascript
// ❌ Bad - using array index
{items.map((item, index) => (
  <Item key={index} data={item} />
))}

// ✅ Good - using unique identifier
{items.map(item => (
  <Item key={item.id} data={item} />
))}
```

**Q2: What are the best practices for conditional rendering?**

**Answer:**
1. **Use ternary for simple conditions**
2. **Use logical AND for showing/hiding elements**
3. **Extract complex conditions into variables**
4. **Use early returns for multiple conditions**
5. **Consider using switch statements for multiple states**

```javascript
const Component = ({ user, loading, error }) => {
  // Early return for loading
  if (loading) return <Spinner />;
  
  // Early return for error
  if (error) return <Error message={error} />;
  
  // Complex condition extracted
  const showWelcome = user && user.isVerified && !user.isBlocked;
  
  return (
    <div>
      {showWelcome && <Welcome user={user} />}
      {user ? <Dashboard /> : <Login />}
    </div>
  );
};
```

---

## State Management

### Local State Management

#### useState for Simple State
```javascript
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });
```

#### useReducer for Complex State
```javascript
const initialState = {
  user: null,
  loading: false,
  error: null
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
```

### Global State Management

#### Context API
```javascript
// Create Context
const AppContext = createContext();

// Provider Component
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
```

#### Redux Toolkit (Modern Redux)
```javascript
// Store
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Component
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
```

### Interview Questions & Answers

**Q1: When would you use Context API vs Redux?**

**Answer:**
**Use Context API when:**
- Simple state sharing
- Small to medium applications
- Infrequent state updates
- Theme, authentication, or user preferences

**Use Redux when:**
- Complex state logic
- Large applications
- Frequent state updates
- Time-travel debugging needed
- Middleware requirements

**Q2: What are the problems with Context API?**

**Answer:**
1. **Performance Issues**: All consumers re-render when context value changes
2. **Provider Hell**: Multiple providers can create nested structure
3. **No Built-in DevTools**: Limited debugging capabilities
4. **Single Value**: Each context can only hold one value

**Solutions:**
```javascript
// Split contexts to avoid unnecessary re-renders
const StateContext = createContext();
const DispatchContext = createContext();

// Use useMemo to prevent unnecessary re-renders
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);
  
  return (
    <StateContext.Provider value={memoizedState}>
      <DispatchContext.Provider value={memoizedDispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
```

---

## Performance Optimization

### React.memo
Prevents unnecessary re-renders of functional components:

```javascript
const ExpensiveComponent = React.memo(({ data, onClick }) => {
  console.log('Rendering ExpensiveComponent');
  return (
    <div onClick={onClick}>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
});

// With custom comparison
const MyComponent = React.memo(({ user }) => {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});
```

### useMemo and useCallback
```javascript
const Component = ({ items, filter, onItemClick }) => {
  // Memoize expensive calculation
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  // Memoize callback to prevent child re-renders
  const handleItemClick = useCallback((item) => {
    onItemClick(item.id);
  }, [onItemClick]);
  
  return (
    <div>
      {filteredItems.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          onClick={handleItemClick} 
        />
      ))}
    </div>
  );
};
```

### Code Splitting
```javascript
// Lazy loading
const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

// Route-based code splitting
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

### Interview Questions & Answers

**Q1: What are the different ways to optimize React performance?**

**Answer:**
1. **React.memo**: Prevent unnecessary re-renders
2. **useMemo**: Memoize expensive calculations
3. **useCallback**: Memoize functions
4. **Code Splitting**: Load code on demand
5. **Virtualization**: Render only visible items
6. **Lazy Loading**: Load components when needed
7. **Optimize Bundle Size**: Tree shaking, compression
8. **Avoid Inline Objects**: Create objects outside render

**Q2: When should you use React.memo?**

**Answer:**
Use React.memo when:
- Component receives the same props frequently
- Component is expensive to render
- Component is a pure component (same props = same output)
- Parent component re-renders frequently

**Don't use React.memo when:**
- Props change frequently
- Component is already fast
- Props are always different (objects, functions)

**Q3: What is the difference between useMemo and React.memo?**

**Answer:**
- **React.memo**: Memoizes entire component
- **useMemo**: Memoizes specific values/computations

```javascript
// React.memo - memoizes component
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});

// useMemo - memoizes computation
const Component = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);
  
  return <div>{expensiveValue}</div>;
};
```

---

## Testing

### Testing Library Setup
```javascript
// setupTests.js
import '@testing-library/jest-dom';

// Component test
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

### Testing Hooks
```javascript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should initialize with 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  test('should increment count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

### Testing Context
```javascript
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const renderWithTheme = (component, theme = 'light') => {
  return render(
    <ThemeProvider value={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('ThemedComponent', () => {
  test('renders with light theme', () => {
    renderWithTheme(<ThemedComponent />, 'light');
    expect(screen.getByText('Light Theme')).toBeInTheDocument();
  });
});
```

### Interview Questions & Answers

**Q1: What are the best practices for testing React components?**

**Answer:**
1. **Test behavior, not implementation**
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Test user interactions**
4. **Mock external dependencies**
5. **Use descriptive test names**
6. **Test error states**
7. **Keep tests simple and focused**

**Q2: What is the difference between shallow and mount in Enzyme vs React Testing Library?**

**Answer:**
**Enzyme (Legacy):**
- `shallow()`: Renders only the component, not children
- `mount()`: Renders full component tree

**React Testing Library (Recommended):**
- Always renders full component tree
- Focuses on testing behavior, not implementation
- Encourages better testing practices

**Q3: How do you test async operations in React?**

**Answer:**
```javascript
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock API
jest.mock('./api', () => ({
  fetchUser: jest.fn()
}));

test('displays user data after loading', async () => {
  const mockUser = { id: 1, name: 'John Doe' };
  api.fetchUser.mockResolvedValue(mockUser);
  
  render(<UserProfile userId={1} />);
  
  // Wait for loading to finish
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  expect(api.fetchUser).toHaveBeenCalledWith(1);
});
```

---

## Advanced Patterns

### Higher-Order Components (HOCs)
```javascript
const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useAuth();
    
    if (!user) {
      return <Login />;
    }
    
    return <WrappedComponent {...props} user={user} />;
  };
};

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

### Render Props
```javascript
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading });
};

// Usage
<DataFetcher
  url="/api/users"
  render={({ data, loading }) => (
    loading ? <Spinner /> : <UserList users={data} />
  )}
/>
```

### Compound Components
```javascript
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabList = ({ children, activeTab, setActiveTab }) => (
  <div className="tab-list">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { index, activeTab, setActiveTab })
    )}
  </div>
);

const Tab = ({ children, index, activeTab, setActiveTab }) => (
  <button
    className={`tab ${index === activeTab ? 'active' : ''}`}
    onClick={() => setActiveTab(index)}
  >
    {children}
  </button>
);

// Usage
<Tabs defaultTab={0}>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

### Custom Hooks
```javascript
// Custom hook for API calls
const useApi = (url) => {
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
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

// Usage
const UserList = () => {
  const { data: users, loading, error } = useApi('/api/users');
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

### Interview Questions & Answers

**Q1: What are Higher-Order Components and when would you use them?**

**Answer:**
HOCs are functions that take a component and return a new component with additional props or behavior.

**Use cases:**
- Authentication/Authorization
- Logging
- Data fetching
- Code reuse across components

**Modern alternative: Custom Hooks**

**Q2: What is the difference between HOCs and Render Props?**

**Answer:**
| HOCs | Render Props |
|------|-------------|
| Function that wraps component | Component that uses function as prop |
| Static composition | Dynamic composition |
| Can cause wrapper hell | More flexible |
| Props collision possible | Clear prop flow |

**Q3: What are Compound Components?**

**Answer:**
Compound components work together to form a complete UI. They share implicit state and communicate with each other.

**Benefits:**
- Flexible API
- Separation of concerns
- Reusable patterns
- Clear component relationships

---

## React Ecosystem

### Routing (React Router)
```javascript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

// Programmatic navigation
const Component = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleSubmit = () => {
    navigate('/dashboard');
  };
};
```

### Styling Solutions
```javascript
// CSS Modules
import styles from './Component.module.css';
<div className={styles.container} />

// Styled Components
import styled from 'styled-components';
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 15px;
`;

// Emotion
import { css } from '@emotion/react';
const buttonStyle = css`
  background: blue;
  color: white;
`;
<button css={buttonStyle}>Click me</button>

// Tailwind CSS
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

### Form Libraries
```javascript
// React Hook Form
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email'
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required')
});

const MyForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <Field name="email" type="email" />
      <ErrorMessage name="email" component="div" />
      <Field name="password" type="password" />
      <ErrorMessage name="password" component="div" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
```

### Interview Questions & Answers

**Q1: What are the differences between client-side and server-side routing?**

**Answer:**
**Client-side Routing:**
- Navigation handled by JavaScript
- No page refresh
- Faster navigation
- SEO challenges
- Single page application

**Server-side Routing:**
- Navigation handled by server
- Full page refresh
- Better SEO
- Slower navigation
- Multiple page application

**Q2: What are the popular CSS-in-JS solutions and their trade-offs?**

**Answer:**
**Styled Components:**
- ✅ Dynamic styling
- ✅ Automatic vendor prefixing
- ❌ Runtime overhead
- ❌ Bundle size

**Emotion:**
- ✅ Better performance than styled-components
- ✅ Flexible API
- ❌ Learning curve

**CSS Modules:**
- ✅ No runtime overhead
- ✅ Scoped styles
- ❌ Less dynamic

---

## Practical Coding Challenges

### Challenge 1: Todo App with CRUD Operations
```javascript
import { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  
  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

### Challenge 2: Custom useDebounce Hook
```javascript
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

// Usage
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      fetch(`/api/search?q=${debouncedSearchTerm}`)
        .then(res => res.json())
        .then(setResults);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

### Challenge 3: Infinite Scroll Component
```javascript
import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (fetchMore) => {
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData();
  }, [isFetching]);
  
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  };
  
  const fetchMoreData = useCallback(async () => {
    await fetchMore();
    setIsFetching(false);
  }, [fetchMore]);
  
  return [isFetching, setIsFetching];
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchMore = useCallback(async () => {
    const response = await fetch(`/api/items?page=${page}`);
    const newItems = await response.json();
    setItems(prevItems => [...prevItems, ...newItems]);
    setPage(prevPage => prevPage + 1);
  }, [page]);
  
  const [isFetching] = useInfiniteScroll(fetchMore);
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
      {isFetching && <div>Loading more items...</div>}
    </div>
  );
};
```

### Challenge 4: Modal Component with Portal
```javascript
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%'
        }}
      >
        <button 
          onClick={onClose}
          style={{ float: 'right' }}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

// Usage
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
      </Modal>
    </div>
  );
};
```

---

## System Design Questions

### Question 1: Design a React Chat Application

**Requirements:**
- Real-time messaging
- Multiple chat rooms
- User authentication
- Message history
- Online status

**Architecture:**
```javascript
// State Management Structure
const chatState = {
  user: {
    id: '1',
    name: 'John Doe',
    avatar: 'avatar.jpg',
    status: 'online'
  },
  rooms: [
    {
      id: 'room1',
      name: 'General',
      members: ['user1', 'user2'],
      messages: [
        {
          id: 'msg1',
          userId: 'user1',
          content: 'Hello!',
          timestamp: '2023-01-01T10:00:00Z'
        }
      ]
    }
  ],
  activeRoom: 'room1',
  onlineUsers: ['user1', 'user2']
};

// Component Architecture
const ChatApp = () => {
  return (
    <div className="chat-app">
      <Sidebar />
      <ChatRoom />
      <UserList />
    </div>
  );
};

const Sidebar = () => {
  const { rooms, activeRoom, setActiveRoom } = useChatContext();
  
  return (
    <div className="sidebar">
      {rooms.map(room => (
        <RoomItem 
          key={room.id}
          room={room}
          isActive={room.id === activeRoom}
          onClick={() => setActiveRoom(room.id)}
        />
      ))}
    </div>
  );
};

const ChatRoom = () => {
  const { messages, sendMessage } = useChatRoom();
  const [newMessage, setNewMessage] = useState('');
  
  const handleSend = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };
  
  return (
    <div className="chat-room">
      <MessageList messages={messages} />
      <MessageInput 
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSend}
      />
    </div>
  );
};

// Custom Hooks
const useChatRoom = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080/rooms/${roomId}`);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };
    
    setSocket(ws);
    
    return () => {
      ws.close();
    };
  }, [roomId]);
  
  const sendMessage = useCallback((content) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        type: 'message',
        content,
        timestamp: new Date().toISOString()
      }));
    }
  }, [socket]);
  
  return { messages, sendMessage };
};
```

### Question 2: Design a React E-commerce Product Listing

**Requirements:**
- Product search and filtering
- Pagination or infinite scroll
- Shopping cart
- Product details
- Performance optimization

**Solution Approach:**
```javascript
// State Management
const useProductStore = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    search: '',
    sortBy: 'name'
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0
  });
  
  const fetchProducts = useCallback(async () => {
    const params = new URLSearchParams({
      ...filters,
      page: pagination.page,
      limit: pagination.limit
    });
    
    const response = await fetch(`/api/products?${params}`);
    const data = await response.json();
    
    setProducts(data.products);
    setPagination(prev => ({ ...prev, total: data.total }));
  }, [filters, pagination.page, pagination.limit]);
  
  return {
    products,
    filters,
    setFilters,
    pagination,
    setPagination,
    fetchProducts
  };
};

// Component Structure
const ProductListing = () => {
  const {
    products,
    filters,
    setFilters,
    pagination,
    fetchProducts
  } = useProductStore();
  
  const debouncedSearch = useDebounce(filters.search, 500);
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, debouncedSearch]);
  
  return (
    <div className="product-listing">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="main-content">
        <SearchBar 
          value={filters.search}
          onChange={(search) => setFilters({...filters, search})}
        />
        <SortOptions 
          value={filters.sortBy}
          onChange={(sortBy) => setFilters({...filters, sortBy})}
        />
        <ProductGrid products={products} />
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
};

// Optimized Product Grid
const ProductGrid = React.memo(({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

const ProductCard = React.memo(({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
});
```

### Key Design Considerations

1. **Performance:**
   - Virtualization for large lists
   - Image lazy loading
   - Code splitting
   - Memoization

2. **State Management:**
   - Global state for cart, user
   - Local state for UI interactions
   - Server state management (React Query)

3. **User Experience:**
   - Loading states
   - Error handling
   - Optimistic updates
   - Offline support

4. **Scalability:**
   - Component composition
   - Custom hooks for logic reuse
   - Proper separation of concerns
   - Type safety with TypeScript

---

## Final Interview Tips

### Technical Preparation
1. **Practice coding challenges** - Build real projects
2. **Understand React internals** - Virtual DOM, reconciliation, fiber
3. **Know the ecosystem** - Popular libraries and their use cases
4. **Performance optimization** - Profiling and optimization techniques
5. **Testing strategies** - Unit, integration, and E2E testing

### Behavioral Preparation
1. **Explain your thought process** clearly
2. **Ask clarifying questions** before coding
3. **Discuss trade-offs** and alternatives
4. **Handle feedback** gracefully
5. **Show continuous learning** attitude

### Common Mistakes to Avoid
1. **Not asking questions** about requirements
2. **Overengineering** simple solutions
3. **Ignoring edge cases** and error handling
4. **Poor naming** and code organization
5. **Not explaining** your reasoning

### Resources for Further Learning
- **Official React Documentation**
- **React DevTools** for debugging
- **Create React App** for quick setup
- **Next.js** for production applications
- **React Testing Library** for testing
- **React Query** for server state
- **React Hook Form** for forms

Remember: React interviews often focus on understanding concepts deeply rather than memorizing syntax. Practice explaining concepts clearly and be prepared to write code that demonstrates your understanding.