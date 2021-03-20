import React from 'react'

export default ({post}) => {
    return (
        <div className='card'>
            <div className="card-body">
                <h1 className='card-title'>{post.title}</h1>
            </div>

        </div>
    )
}