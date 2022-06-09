import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import CommentContext from '../Context/commmentContext'

export default function Description() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const a = useContext(CommentContext)
    let data = a.data
    console.log(data);

    return (
        <>


            <div className="padding" >
                <h1>Issue Details</h1>
                <p><b>Issue Description</b> : {data[id - 1].Issue}</p>
                <p><b>SEVERITY</b> : {data[id - 1].Severity}</p>
                <p><b>STATUS</b> : {data[id - 1].status}</p>
            </div>
            <div className="padding">
                <Link to="/allissue">Back</Link>
            </div>
        </>
    );
}
