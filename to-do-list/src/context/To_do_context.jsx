import { createContext, useContext, useEffect } from "react";
// create a context
const newtodo = createContext()

export default function To_Do_Context(props) {
    let todo = JSON.parse(localStorage.getItem('todoitems')) || [];
    return (
        <>
            <newtodo.Provider value={todo}>
                {props.children}
            </newtodo.Provider>
        </>
    )
}
// create a custom hook to use the context globally
export const useTodo = () => {
    const tododata = useContext(newtodo)
    return tododata
}