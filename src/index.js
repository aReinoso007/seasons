import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>hi there</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)