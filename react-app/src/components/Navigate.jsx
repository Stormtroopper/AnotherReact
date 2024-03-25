import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "../App.css"
function Navigate() {
    return (
        <>
            <nav className=" navbar navbar-expand-lg">
                <div className="container-fluid" >
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-2 mr-4 " style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '100%',
                            
                        }}>

                            <li className="nav-item">
                                <Link to='/'><h3>Home</h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact'><h3>Contact Us</h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'><h3>About </h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/circle'><h3>PostMalone</h3></Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/login'className={(isActive,isPending)=>isPending?"pending":isActive?"active":""}>

                                    <button id='button-nav' className='btn btn-info' >Login</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigate