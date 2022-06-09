import React, { useEffect } from 'react'
import { Link, } from 'react-router-dom'
import { Prompt } from 'react-router'


function LinkedIssue(props) {
    const path = `/${props.no}`;

    return (
        <div>

            <Link to={path} > {props.id}</Link>





        </div>
    )
}

export default LinkedIssue