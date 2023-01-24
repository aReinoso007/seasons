import React from "react";
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

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
            return <SeasonDisplay errMsg={this.state.errorMessage} />
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please allow location" />
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)