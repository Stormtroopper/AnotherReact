import { React, useCallback, useReducer } from 'react'

function Reducer() {
    const [count, dispatch] = useReducer(count_reduce, 0)
    function count_reduce(state, action) {
        switch (action.type) {

            case "increment":
                return state + action.payload;

            case 'decrement':
                return state - action.payload;
           
            default:
                return state
        }
    }
       
    return (
        <>
        <h1 className='text-center'>Count :{count}</h1><br /><br />
        
        <div className='container-fluid text-center d-flex' style={{
            justifyContent:'space-evenly'
        }}>
            <button className='btn btn-dark' onClick={() => dispatch({ type: 'increment',payload:1 })}>+1</button>
            <button className='btn btn-info' onClick={() => dispatch({ type: 'decrement' ,payload:1})}>-1</button>
            <button className='btn btn-success' onClick={() => dispatch({ type: 'increment',payload:10 })}>+10</button>
            <button className='btn btn-warning' onClick={() => dispatch({ type: 'decrement',payload:10 })}>-10</button>

        </div>
        </>
    )
}

export default Reducer