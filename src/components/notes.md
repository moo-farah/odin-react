# What are components?
React is that it allows you to break a UI(User Interface) down into independent reusable chunks
 

## What is JSX?
JSX is syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

### Passing Data Between Components
**Data transfer in React**

React, data is transferred from parent components to child components via props.
This data transfer is unidirectional, meaning it flows in only one direction.
Any changes made to this data will only affect child components using the data, and not parent or sibling components.

**Prop destructuring**

Used to extract specific properties from the props object directly in a component's parameters list.

### Rendering
Is the process of React taking your components code (JSX) and turning it into actual DOM elements the browser displays, then keeping that DOM in sync whenever data changes.

 - Rendering list of components in JSX
 - Conditionally rendering UI: is showing different UI depending on some condition - state, props, or any JS expression

**Rendering:** is not updating the DOM. Rendering is just React doing the math behind the scenes - calling functions and comparing the new UI with the old one (a process called **reconciliation or diffing**)

### Keys in React
Are special string attributes you need to incluse when rendering lists of elements.
They act as unique identifiers for items in an array, helping React keep track of which items have changed, been added, or been removed.

# States And Effects
State in React is data that belongs to a component and can change over time.
And when it changes, React automatically re-renders the component to reflect the new value.
State is a component's memory

**How State Works:** The Mental Model
Think of states as a component's local data store.
 - <b>Props:</b> are like arguments passed to a function. They flow downward and cannot be changed by the receiving component
 - <br>State:</b> is managed internally within the component. When a user interacts with the app (clicks a button, types in an input, fetches data), that interaction updates the state triggering a re-render cycle.

 **Key Mechanics of useState:**
  - Immutability: You should never modify state directly (e.g., count = count + 1)
  - Asynchronous Update: State updates requested via setter functions are asynchronous and batched by react for performance optimization
  - Functional Updates: If your new state depends on the previous state, always pass a callback function to the setter to avoid race conditions
  
## Hooks
Are special functions that let functional components "hook into" React features like state, lifecycle methods, and refs
For now, remember that hooks have rules that we need to abide by:
 - Hooks can only be called from the top level of a function component
 - Hooks can't be called from inside loops or conditions, or nested functions
 - Must be called in the exact same order every single time a component renders

**useState:** Lets your component remember data between renders and triggers a UI update when that data changes
**useEffect:** Lets your perform side effects in your components - such as fetching data from an API, setting up subscriptions, or manually changing the DOM
**useContext:** Allows you to read and subscribe to React context directly without having to pass props down manually through every layer (solving prop drilling)
**useRef:** Creates a mutable object that perists across renders. 
 - It mostly commonly used to directly or manipulate a DOM element (like focusing an input)
**useMemo:** Performance optimization, caches the result of an expensive calculation
**useCallback:** caches a function definition so it does't get recreated on every render

## How to deal with side effects
React need to interact with things outside themselves. These things can be anything from querying data from a server to finding/changing the position of the component on the webpage or even sending some data to a server when necessary
This interaction with the outside world is called a side-effect.


# Class Based Components
Unlike functional components (which are just JavaScript functions that return JSX),
a class component is an ES6 class that **extends** React.Component and must include a **render()** methond

### Component LifeCycle Methods
There are three stages to a component's life:
 - mounting
 - updating
 - unmounting

**Mounting:** (The Birth) This is the phase when the component is created for the very first time, 
rendered into code, and actually inserted (mounted) into the browser's DOM so the user can see it

**Updating:** (The life & Growth) Once the component is on the screen, things change. The user types in an input, clicks a button, or new props are passed down from a parent component

**Unmounting:** (The Exit/Death) This is the final phase when the component is beigng removed (unmounted) from the screen

**render():** It runs on mount and update of a component. Render should be pure, meaning it doesn't modify components state,
returns the same thing each time it's called(given the same inputs)
**componentDidMount():** Is run after the component is mounted (inserted in the DOM tree).
**componentDidUpdate():** This method is run after a component re-renders. 
**componentWillUnmount():** This is the last lifecyle method, which called before a component is unmounted and destroyed.
In this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers, etc.

## React Router
Navigating between the pages 

### Client-side routing
It helpd in building single-page applications (SPAs) without refreshing as the user navigates.

# Managing State With The Context API
Context API in React is a feature that allows you to manage the global state of your application without the need to pass data through multiple levels of components using props

#### Implementing the Context API
There are three key elements in this API that we need to understand:
* **createContext:** This creates the context, it's how we can create the context. It takes in any value, be it a number, string, or object, which can be referred to as the **default value** of the context

* **useContext:** Used to consume data from a context object created by createContext. 
 - We can use this hook inside our component to retrieve the data that we need. Accepts the context object as argument

* **contextObject:** The context object is a component that accepts a prop called value, which is the context value that's going to be passed down to the components no matter how deeply they're nested

### Drawbacks of using Context API
 1. It can lead to performance issues: When you update the state in a context, it can cause all components that are consuming that context to re-render, even if the state that they are using hasn't changed.
 2. It can make your code harder to follow: With the Context API, it's easier to access the state from any component in your application.

### Potential solutions
1. Use multiple smaller contexts instead of a single large context
2. Sometimes Context API might not even be the best solution for the problems that we want to deak with
3. You can rely on external state management systems like **Zustand** and **Redux**. They have alot of optimizations built-in and are feature rich

# Reducing State
Reducers are pure functions that take a previous state and an action to return a new state.
The action is an object with a type property describing what the user did.

**The useReducer hook:**
React allows us to use reducers in our components through a hook called **useReducer**
This hook takes a reducer function and an initial state as arguments, then returns an array with two values: 
 - The current state and a dispatch function

The dispatch function receives an action object as argument, which is passed to our reducer function and the returned value from it is used to update the state.

# Refs and Memoization
**Introduction**
**The useRef hook**
It lets you manage a value that's not needed for rendering. They are an alternative to state, as when you want a component to "remember" some information, but you don't want that information to trigger new renders

 - Often used when performing imperative actions or accessing specific elements rendered in the DOM

### DOM Manipulation
useRef hook comes to the rescue by providing a way to access and interact with those elements.

**useMemo:** hook provides a way to add memoization inside our components. It's used to optimize expensive or complex calculations where it caches the result of a function call and stores it to be used later without recalculating it
