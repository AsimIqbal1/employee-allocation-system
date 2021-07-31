import React from 'react'
import routes from '../../constants/routes'
import "./notFound.css";

// used when any unknown route is requested
function NotFound() {
    return (
        <div className="fof">
            <h1>Page not found. Looks like you are lost. Go back to
                <a href={routes.HOME}>Home</a>
            </h1>
        </div>
    )
}

export default NotFound
