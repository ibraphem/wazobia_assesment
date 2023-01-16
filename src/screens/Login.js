import React, { useEffect } from "react";
import Container from "../components/Container";
import eye from "../assets/images/eye.png";
import eyeslash from "../assets/images/eyeslash.png";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { signInSchema } from "../utils/formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import { signin } from "../redux/slices/userSlice";
import { setShowPassword } from "../redux/slices/miscSlice";


const Login = () => {
  const auth = useSelector((state) => state?.user);
  const showPassword = useSelector((state) => state?.misc?.showPassword);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async(values) => {
    dispatch(signin({payload: values})) 
  };

  useEffect(() => {
    if(auth?.token){
      navigate("/dashboard")
    }
   
  }, [auth?.token])
  

  return (
    <Container>
      <h1 className="text-center font-bold text-xl">Log in</h1>
      <p className="text-center">
        If you have no account,{" "}
        <span className="text-link font-bold">
          <Link to="/signup">Sign up</Link>
        </span>
      </p>
      {!auth?.sLoading && auth?.sError && <Alert type="danger" msg={auth?.sError}/>}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="my-4">
            <div className="w-full mb-4">
              <label htmlFor="" className="font-bold">
                Email Address
              </label>
              <Field
                name="email"
                placeholder="Type here"
                className="block border-[1px] border-brdlight h-[40px] w-full p-2  rounded-[4px] outline-none"
              />
                {errors.email && touched.email && (
                <p className="text-sm text-danger mt-[1px]">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="w-full mb-12">
              <label htmlFor="" className="font-bold">
                Password
              </label>
              <div className="px-2 flex justify-between border-[1px] border-brdlight h-[40px] w-full p-2  rounded-[4px]">
                <Field
                  name="password"
                  type={showPassword.status ? "text" : "password"}
                  placeholder="Type your password here"
                  className="w-[90%] h-full py-2 outline-none"
                />
                <img
                  src={showPassword?.status ? eyeslash : eye}
                  alt=""
                  className="cursor-pointer h-[20px] w-[20px] "
                  onClick={() => dispatch(setShowPassword({status: !showPassword?.status}))}
                />
              </div>
            </div>
            <button
              disabled={!isValid || !dirty || auth?.sloading}
              type="submit"
              className={`h-[48px] font-bold rounded-[4px] w-full text-white ${
                !dirty || !isValid || auth?.sloading ? "bg-btnDisabled" : "bg-btnActive"
              }`}
            >
              {auth?.sloading ? "Signing in ... Please wait" : "Log in"}
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
