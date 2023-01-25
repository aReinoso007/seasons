## Seasons Project
### What is this about? 🔎
This is a simple react app that tells the weather using the user's location and some custom styling is applied depending on the season.

## Benefits of Class based Components ✨
- Easier code organization
- Can use 'state' system, respond to data loading methods
- easier to handle user input
- Understands lifecycle methods

### Rules of Class Based Components 📏
- must be a JS class
- must extend (subclass) ``` React.Component ```
- must define a 'render' method that returns some JSX
## State in React 👓
### Rules of state 📏
- only usable with class components
- props and state are different
- 'State' is a JS obj that contains data relevant to a component
- 'Updating' state on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created
- State can only be updated using function ``` setState ```
- setState is an addition operation so the state of a prop does not get override (unless a prop's state is changing)
### Default props 🎁
If no props are passed to the component we must use
```
ComponentName.defaultProps = {
    propName: 'default value'
}
```
### Notes on Render Method 🎃
The render method must not have multiple return statements rather utilize helper functions to do the heavy lifting or conditional logic.
## Component lifeCycle 🔃
* Constructor: 
    for state init, init data loading (calling APIs). First function that gets called

* render():
    gets called quite often and its mostly used for showing info rather than loading or calling APIs. Only for returning JSX

* componentDidMount():
    for data loading or some process once, this is the standard so API request are dealt here instead, it helps with clear and clean code. It runs one time when the component is shown in the screen

* componentDidUpdate():
    gets called whenever a component changes, good for data loading whenever a component gets new props. For multiloading and fetching data when a component gets updated

* componentWillUnmount():
    Whenever we want to remove a component and we want to do some cleanup, when we use some 3rd parties libraries tho its not used as often.

### Other lifecycle methods 🚀
- shouldComponentUpdate()
- getDerivedStateFromProps()
- getSnapshotBeforeUpdate()


