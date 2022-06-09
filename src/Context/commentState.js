import react, { useState, useEffect } from "react";
import CommentContext from "./commmentContext";
import { getAllIssue } from "../data/data";
const CommentState = (props) => {

    const [data, setdata] = useState()

    console.log(data)

    return (
        < CommentContext.Provider value={{ data, setdata }} >
            {props.children}

        </ CommentContext.Provider>
    )

}
export default CommentState;