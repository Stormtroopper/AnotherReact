import { createContext, useContext } from "react"

export const ToDo = createContext({
    todos: [
        {
            id: 1,
            todo: " New msg ",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { }
})


export const TodoContext = () => {
    return useContext(ToDo)
}
export const ToDoProvider = ToDo.Provider
