import React, { useReducer, useState } from 'react'
import { useTodo } from './context/To_do_context'
import Reducers from './reducers/reducers';
export default function Input() {
    let [inputdata, setInput] = useState("")
    const [editIndex, SeteditIndex] = useState({})
    const [updatedtask, setUpdatetask] = useState("")
    let todo = useTodo();
    let [state, dispatch] = useReducer(Reducers, todo)
    const updateHandler = () => {
        console.log(updatedtask);
        dispatch({
            type: "edit",
            payload: { task: updatedtask, index: editIndex }
        })
    }
    function setHandle(task, index) {
        setUpdatetask(task)
        SeteditIndex(index)

    }

    function addTask() {
        console.log(inputdata);
        if (!inputdata.trim()) {
            alert('Enter a todo')
        } else {
            dispatch({ type: "add", payload: inputdata.trim() })
            setInput('')
        }
    }
    return (
        <>
            <div className="fluid-container" >
                <input type="text" className='form-control d-flex mx-auto ' style={{
                    width: "40%",
                    display: 'flex',
                }} placeholder='Enter a task' value={inputdata} onChange={(e) => setInput(e.target.value)} />
                <br />
                <button className='btn btn-success fs-4 mx-auto d-flex' onClick={addTask} onSubmit={addTask}>Add To Do</button>
                <br />
                {
                    state.map((e, id) => {
                        return (
                            <>
                                <br />
                                <div className='card d-flex justify-content-center' style={{ marginLeft: '30%', width: "40%" }}>

                                    <div className="card-body" >
                                        <h3 className='text-muted fs-4 text-center'>
                                            {e}
                                        </h3><br />

                                        <div className="d-flex justify-content-around" id="button-tag">

                                            <button type="button" className="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id='edit-id' onClick={() => setHandle(e, id)}>
                                                Edit
                                            </button>
                                            <button className='btn btn-danger' id='delete-id' onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
                                        </div>

                                    </div>
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Todo Task</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <textarea cols="30" rows="10" value={updatedtask} onChange={(e) => setUpdatetask(e.target.value)}></textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-info" data-bs-dismiss="modal" id='close-id'>Close</button>
                                                    <button type="button" className="btn btn-success text-muted" id='update-id' data-bs-dismiss="modal" onClick={updateHandler}>Update task</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>

                        )
                    })
                }

            </div>
        </>
    )

}

