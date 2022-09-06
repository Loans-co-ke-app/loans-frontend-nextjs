import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <h1>Page not found. Go back to <Link href={'/'} className="text-blue-600 hover:text-purple-600">Hompage</Link></h1>
        </div>
    )
}

export default NotFound