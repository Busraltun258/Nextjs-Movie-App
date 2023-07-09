import Link from 'next/link'
import React from 'react'

const MenuItem = ({ mn }) => {
    return (
        <div>
            <Link  className="text-indigo-600 "href={mn.url}>{mn.name}

            </Link>

        </div>
    )
}

export default MenuItem