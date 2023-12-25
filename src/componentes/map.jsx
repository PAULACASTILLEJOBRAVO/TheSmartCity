import React from 'react';
import WorldMap from "react-svg-worldmap";

const Map = () => {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 331883986 }, // india
        { country: "us", value: 1311559204 },  // united states
        { country: "id", value: 26493582 },  // indonesia
        { country: "es", value: 1289618778 },  // spain
        { country: "jp", value: 1389618456 },  // japan
        { country: "it", value: 208679114 },  // italy
        { country: "fr", value: 291062905 },  // french
        { country: "ru", value: 541944641 },  // russia
        { country: "gb", value: 1349618778 }   // united kingdom
    ];

    return(
        <div className='App'>
            <WorldMap color="green" title="Top 10 Paíse más Populares con Smarts Cities" size="lg" value-suffix="smarts cities" data={data} />
        </div>
    );
}

export default Map;