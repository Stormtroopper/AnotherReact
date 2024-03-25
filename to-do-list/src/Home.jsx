import React from 'react'
import { Link  } from 'react-router-dom'
function Home() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-primary " style={{
            width:'100%'
        }}>
                <div className="container-fluid ">
                    <Link to='https://www.flipkart.com/' className="underline-none text-danger  text-2xl mx-auto navbar-brand" id='header-tag'>TodoList</Link>
                </div>
        </nav>    
    </>

  )
}

export default Home