import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers] = useState([])
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>
        setUsers(data))
        .catch(error=>console.log(error))
        FetchFunction();
    }, [])
    async function FetchFunction() {
        let res = await fetch("https://jsonplaceholder.typicode.com/albums")
        let data = await res.json();
        setAlbums(data)
    }
    return (
        <>
            <h1 className='text-center'>Fetch Api Component</h1>
            <h2 className='text-center'>Users</h2>
            {users.map((e) => {
                return (
                    <>
                        <li className='text-center'>
                            {e.name}
                        </li>
                    </>
                )
            })}
                            <h2 className='text-center'>Albums</h2>
                        {albums.map((e) => {
                return (
                    <>
                        <li className='text-center '>
                            {e.title}
                        </li>
                    </>
                )
            })}
        </>
    )
}

export default Fetch