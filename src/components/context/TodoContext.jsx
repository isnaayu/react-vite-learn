import { useContext, useReducer, createContext } from "react";

const TodoContext = createContext()

const initialState = {
    todos: []
}

const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'REMOVE_TODO':
            return {...state, todos: [...state.todos.filter((todo) => todo.id !== action.payload)]}
        default:
            return state
    }
}

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext)
}