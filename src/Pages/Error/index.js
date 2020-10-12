import React from 'react'
import { connect } from 'react-redux';
import './style.scss'
import { setBackendToken } from 'Redux/Auth/actions';
import { useState } from 'react';
function Error({match}) {
    const type = match.params.type; 
    const getMessageFromType = ()=>{
        switch(type){
            case "no_data_returned":
                return "Could not fetch required data.Please make sure the id/parameters are correct."
            case "token_expired":
                return "Looks like the login token expired. Please login again to access your account and library."
            default:
                return "How did you get here?"
        }   
    }
    const [message,setMessage] = useState(getMessageFromType())
    
    return (
        <div className="page-content error-page-wrapper">
            <div className="error-message">
                Uh oh, something went wrong.
                <br/>
                {message}
                <br/>
                If you feel this is a bug, please report the issue at the github repo.
                <br/>
            </div>
        </div>
    )
}

export default connect(null,{setBackendToken})(Error);
