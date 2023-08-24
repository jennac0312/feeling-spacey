import { createContext, useState, useEffect } from "react";


export const AppContext = createContext()

const AppContextProvider = ( { children } ) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      const apiKey = 'FZTJvV15utmnikwnfyfiKDSbyHBI8u3S2DUj2jRI';
      const apiUrl = `https://api.nasa.gov/planetary/apod?count=10&api_key=${apiKey}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    let test = "testing"
    return (
        <AppContext.Provider value={{
            test, photos
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider