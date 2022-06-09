import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IssueList from './IssueList'
import { useContext } from 'react';
import CommentContext from '../Context/commmentContext';
import { getAllIssue } from '../data/data';

function AllIssue() {
    const a = useContext(CommentContext)
    useEffect(() => {
        getAllIssue().then((p) => {
            a.setdata(p)
            console.log(p)
            console.log("working")
        })



    }, [])


    return (
        <div>


            <h1>Issue List</h1>
            <IssueList ></IssueList>
            <div className="padding">
                <Link to="/add">ADD Item</Link>
            </div>





        </div>
    )
}

export default AllIssue