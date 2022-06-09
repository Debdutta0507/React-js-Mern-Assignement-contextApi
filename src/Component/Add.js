import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import CommentContext from '../Context/commmentContext';


import { useHistory } from "react-router-dom";
import { saveIssue } from '../data/data';









const SignupForm = () => {
    const a = useContext(CommentContext)
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            Issue: '',
            Severity: '',
            status: '',
        },
        validationSchema: Yup.object({
            Issue: Yup.string()
                .required('Issue Issue required'),

        }),
        onSubmit: values => {

            let data = {

                Issue: values.Issue,
                Severity: values.Severity,
                status: values.status,
            }
            console.log("submit working");
            console.log(data);
            a.setdata((prev) => {
                return [...prev, data]
            })
            saveIssue(data).then((res) => {
                console.log(res)
                history.push("/allissue");

            })






            // axios.post('http://localhost:3001/employee/',data)
            //   .then(function (response) {
            //     console.log(response)
            //   }).catch((err)=>console.log(err));




        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Add Issue</h2>
            <div class="padding">
                <label htmlFor="Issue">Description  :       </label>
                <input
                    id="Issue"
                    name="Issue"
                    type="text"
                    placeholder="Enter issue description here"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Issue}

                /> {formik.touched.Issue && formik.errors.Issue ? (
                    <span id="error">{formik.errors.Issue}</span>
                ) : null}
            </div>


            <div class="padding">

                <label htmlFor="Severity">Severity  :    </label>
                <select id="Severity" name="Severity" onChange={formik.handleChange}

                    value={formik.values.Severity}>
                    <option value=''>Select</option>
                    <option value="major">Major</option>
                    <option value="minor">Minor</option>

                </select>

            </div>

            <div class="padding">

                <label >status : </label>
                <input
                    id="open"
                    name="status"
                    type="radio"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.status === "open"}
                    value="open"

                />
                <lable htmlFor="open">Open</lable>
                <input
                    id="inprogress"
                    name="status"
                    type="radio"
                    onChange={formik.handleChange}

                    value="inprogress"
                />
                <lable htmlFor="inprogress">In progress</lable>
                <input
                    id="closed"
                    name="status"
                    type="radio"
                    onChange={formik.handleChange}

                    value="closed"
                />
                <lable htmlFor="closed">Closed</lable>
            </div>

            <div class="padding">


                <button onClick type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignupForm;