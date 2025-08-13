import React from 'react'

export default function Alert(props) {
    return (
            <div style={{height:'30px'}}>
            {props.data && (<div className="alert alert-success" role="alert">
                <h6 className="alert-heading">{props.data.msg}</h6>
            </div>) }
        </div>
    )
}
