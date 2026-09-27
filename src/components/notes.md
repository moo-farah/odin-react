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