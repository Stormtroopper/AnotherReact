let initialvalue=0
export default function reducer(state=initialvalue,action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}