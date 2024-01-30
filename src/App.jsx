import React from 'react';
import './App.css';

function App() {
    const [lightStatus, setLightstatus] = React.useState(false)
    console.log(lightStatus)

    return (
        <main className={lightStatus === true ? 'on' : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={()=> setLightstatus(!lightStatus)}>Turn on/off</button>
                {lightStatus === false ? 'Turn on' : 'Turn off'}
            </section>
        </main>
    );
}

export default App;
