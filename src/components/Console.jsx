import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Console(props) {
    const { id } = props;
    const [console, setConsole] = useState(null);
        
    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
        });
    }, );

    if (!console) {
        return <p>Loading...</p>
    }

    return (
        <p>
            <img src={console.image} alt={console.name} />
            <br></br>
            {console.name}
            <br></br>
            Price: ${console.price}
            <br></br>
            Made in {console.country}
            <br></br>
            Reasleased in {console.releaseYear}
            <br></br>

        </p>
    );
}

export default Console;