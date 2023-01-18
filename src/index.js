import React from "react";
import { createRoot } from 'react-dom/client';

class App extends React.Component {

    //here we intialize state, tho its not the only way
    constructor(props) {
        //Reference to parent class
        super(props);
        //intializing state to an object
        // the only time we do direct assignment to the state
        // we always use setState
        this.state = { lat: null, errorMessage: '' };



    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //we call setState to change the state
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //React needs to have render defined
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)