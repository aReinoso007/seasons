## Component lifeCycle

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