import React from 'react'
import { useParams } from 'react-router'

function User() {
    const { userid } = useParams()
    return (
        <div className="text-red  text-3xl  bg-gray-500 p-4"  >User : {userid}</div>
    )
}

export default User