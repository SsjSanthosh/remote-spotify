import React from 'react'
import Loader from 'react-loader-spinner'
import './style.scss'
function Loading() {
    return (
         <div id="loader">
            <Loader type="ThreeDots"/>
        </div>
    )
}

export default Loading
