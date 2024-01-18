import { createContext, useContext, useState } from "react";

const MyContext = createContext()

const initialState = {
    counter: 0
}

export function MyContextProvider({children}){
    const [data, setData] = useState(initialState)

    const increment = () => {
        setData((prevState) => ({
            ...prevState,
            counter: prevState.counter + 1
        }))
    }

    return (
        <MyContext.Provider value={{data, increment}}>
            {children}
        </MyContext.Provider>
    )
}

export function useMyContext() {
    return useContext(MyContext)
}