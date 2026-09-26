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
