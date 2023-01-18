import React from "react";
import { createRoot } from 'react-dom/client';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
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