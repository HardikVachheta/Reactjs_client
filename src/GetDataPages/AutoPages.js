import { useFormik } from 'formik';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/dumpdata.json';
import { autoPage1Schema } from '../schemas';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Form from '@rjsf/core';
// import data from '../data/dumpdata.json';

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const AutoPages = ({ formData }) => {

    console.log("----------------", formData)
    var id = useParams().id
    const [users, setUsers] = useState('')
    // console.log("Taskbar page id :----", id)

    const { register, handleSubmit } = useForm({})

    useEffect(() => {
        // getdata1()
    });

    const getdata1 = () => {
        console.log("auto page", data)
        var mainid = data.filter((u) => {
            return u.task_id == id
        })
        setUsers(mainid[0])
        console.log("auto main id", mainid)
    }
    var temp = users.task_id
    const onSubmit = (data, e) => {
        console.log("submit data :-------", data)
        e.target.reset()
    }

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // const formik = useFormik({
    //     initialValues: Object.fromEntries(
    //         formData.map((field) => [field.name])
    //     ),
    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    // });

    return (
        <div className="col-xl">
            <Helmet>
                <link rel="stylesheet"
                    href="../assets_pro/vendor/css/rtl/theme-semi-dark.css"
                    className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

            </Helmet>
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{users?.task_name} {users?.task_id}</h5>
                </div>
                <div className="card-body">
                    {/* {formData.map((u)=>{
    return u.name
})} */}
                    <form>

                        {/* {formData ? ( */}
                        {
                            formData.fields?.map((u) => {
                                return (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label d-flex justify-content-between">{u.label}</label>
                                            <input className="form-control" placeholder={u.placeholder} name={u.name} />
                                        </div>
                                    </>
                                )
                            })}
                        {/* ) : (
                            <div>data not found</div>
                        )} */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {/* <form onSubmit={formik.handleSubmit}>

                        {formData.map((field) => (

                            <div className="mb-3" key={field.name}>
                                <label className="form-label d-flex justify-content-between"
                                    for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                {
                                    field.type === 'select' ? (
                                        <select className="select2 form-select" id={field.name}
                                            type={field.type}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            onChange={formik.handleChange}
                                            placeholder={field.placeholder}
                                            required>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            className="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            onChange={formik.handleChange}
                                            placeholder={field.placeholder}
                                            required></textarea>

                                    ) : field.type === 'password' ? (
                                        <div className="input-group input-group-merge">
                                            <input
                                                className="form-control"
                                                type={passwordType}
                                                id={field.name}
                                                name={field.name}
                                                value={formik.values[field.name]}
                                                onChange={formik.handleChange}
                                                placeholder={field.placeholder}
                                                required />
                                            <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                            </span>
                                        </div>
                                    ) : field.type === 'password' ? (
                                        <input
                                            type='hidden'
                                            name={field.name}
                                             />
                                    ) : (
                                        <input
                                            className="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            placeholder={field.placeholder}
                                            onChange={formik.handleChange}
                                            required />
                                    )
                                }
                            </div>
                        ))}

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> */}
                </div>
            </div>
        </div>
    );
    // }
}

export default AutoPages;
