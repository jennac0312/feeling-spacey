import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = ( { children } ) => {

    let test = "testing"
    return (
        <AppContext.Provider value={{
            test
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider