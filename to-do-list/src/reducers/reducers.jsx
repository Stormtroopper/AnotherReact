
function Reducers(state, action) {
    switch (action.type) {
        case "add": {
            localStorage.setItem('todoitems', JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        }
        case "delete": {
            let newSt = state.filter((e, id) => id !== action.payload)
            localStorage.setItem('todoitems', JSON.stringify(newSt))
            return newSt
        }
        case "edit": {
            let updatedSt = state.map((e, i) => {
                if (i == action.payload.index) {
                    return action.payload.task
                } else {
                    return e
                }
            })

            localStorage.setItem('todoitems', JSON.stringify(updatedSt))
            return updatedSt
        }
        default:
            return state;
    }

}

export default Reducers