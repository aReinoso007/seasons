## Seasons Project
### What is this about? 🔎
This is a simple react app that tells the weather using the user's location and some custom styling is applied depending on the season.
## Component lifeCycle 🔃
* Constructor: 
    for state init, init data loading (calling APIs)

* render():
    gets called quite often and its mostly used for showing info rather than loading or calling APIs. Only for returning JSX

* componentDidMount():
    for data loading or some process once, this is the standard so API request are dealt here instead, it helps with clear and clean code

* componentDidUpdate():
    gets called whenever a component changes, good for data loading whenever a component gets new props. For multiloading

* componentWillUnmount():
    Whenever we want to remove a component and we want to do some cleanup, when we use some 3rd parties libraries tho its not used as often.

### Other lifecycle methods 🚀
- shouldComponentUpdate()
- getDerivedStateFromProps()
- getSnapshotBeforeUpdate()

### Notes on Render Method 🎃
The render method must not have multiple return statements rather utilize helper functions to do the heavy lifting or conditional logic.

### Default props 🎁
If no props are passed to the component we must use
```
ComponentName.defaultProps = {
    propName: 'default value'
}
```