import React from 'react'

import "../css/Button.css"

export const Button = (props) => {
    return (
        <button className={`btn btn-${props.theme}`}>
            {props.children}
        </button>
    )
}
