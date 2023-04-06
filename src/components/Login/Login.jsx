import React from "react";
import { Formik } from "formik";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import { api } from "../../api/api";
import { IS_AUTHENTICATED } from "../../context/Authenticated/types";
import { TOKEN_NAME } from "../../tools/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [dispatch] = useAuthenticated(true);
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const data = new FormData();
        data.append("username", values.username);
        data.append("password", values.password);

        api.post("/login", data)
            .then((res) => {
                localStorage.setItem(
                    TOKEN_NAME,
                    JSON.stringify(
                        res.data.token_type + " " + res.data.access_token
                    )
                );
                dispatch({
                    type: IS_AUTHENTICATED,
                    payload: localStorage.getItem(TOKEN_NAME),
                });
                navigate("/admin");
            })
            .catch((err) => toast.error(err.message));
    };
    return (
        <>
            <div className='container'>
                <div className='row vh-100 justify-content-center align-items-center'>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: "",
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        handleSubmit(values);
                                    }}>
                                    {({
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                className='form-control mb-3'
                                                type='text'
                                                name='username'
                                                onChange={handleChange}
                                                value={values.email}
                                                autoComplete='current-username'
                                                placeholder='Login'
                                            />
                                            <input
                                                className='form-control mb-3'
                                                type='password'
                                                name='password'
                                                onChange={handleChange}
                                                value={values.password}
                                                autoComplete='current-password'
                                                placeholder='Password'
                                            />
                                            <button
                                                className='btn btn-primary w-100'
                                                type='submit'
                                                disabled={isSubmitting}>
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
