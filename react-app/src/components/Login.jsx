import React from 'react'

function Login() {
  return (
    <>
        <form action="" className='text-center'>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>Enter Your Name</label>
                <input type="text" className="form-control " style={{
                    width:'30%',
                    marginLeft:'35%'
                }} id="" />

            </div>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>Enter Your Password</label>
                <input type="password" className="form-control"style={{
                    width:'30%',
                    marginLeft:'35%'
                }} id="" />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
    
    </>
    )
}

export default Login