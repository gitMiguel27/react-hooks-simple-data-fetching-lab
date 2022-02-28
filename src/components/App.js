// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [randomDog, setRandomDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(dogData => {
                // console.log(dogData.message)
                setRandomDog(dogData.message);
                setIsLoaded(true);
            });
    }, [])

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <img src={randomDog} alt='A Random Dog'/>
    );
}

export default App;