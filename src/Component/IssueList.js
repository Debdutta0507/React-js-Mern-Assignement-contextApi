import React, { useState } from 'react'
import { useContext } from 'react'
import { Prompt } from 'react-router-dom'
import CommentContext from '../Context/commmentContext'
import Issue from './Issue'
import LinkedIssue from './LinkedIssue'

function IssueList() {
    const a = useContext(CommentContext)
    const [hover, sethover] = useState(false)
    console.log(a)
    console.log("Inside issue list")
    if (a.data == undefined) { return (<>Loading</>) }
    if (a != undefined) {
        return (
            <div>

                <table border='1'>
                    <tr >

                        <th>
                            ISSUE DESCRIPTION
                        </th>
                        <th>
                            SEVERITY
                        </th>
                        <th>
                            STATUS
                        </th>

                    </tr>
                    {
                        a.data.map(
                            p => (
                                <tr onMouseOver={() => sethover(true)}>

                                    <td>
                                        <LinkedIssue no={p.id} id={p.Issue} />
                                    </td>
                                    <td>
                                        <Issue id={p.Severity} />
                                    </td>
                                    <td>
                                        <Issue id={p.status} />
                                    </td>
                                </tr>


                            )


                        )

                    }
                </table>
                <Prompt when={hover} message="Are you sure you want to leave?" />

            </div>
        )
    }

}

export default IssueList