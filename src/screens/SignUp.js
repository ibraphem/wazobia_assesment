import Container from '../components/Container';
import { Field, Form, Formik } from "formik";
import { signupSchema } from "../utils/formValidationSchema";
import eye from "../assets/images/eye.png";
import eyeslash from "../assets/images/eyeslash.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';
import Alert from '../components/Alert';
import { setShowPassword } from "../redux/slices/miscSlice";

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state?.user);
  const showPassword = useSelector((state) => state?.misc?.showPassword);

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      };
    
      const handleSubmit = async(values) => {
        dispatch(registerUser({payload: values})).then((res) => {
          if(res?.payload?.data?.token){
            navigate("/dashboard")
          }
        })
      };


    return (
        <Container>
        <h1 className="text-center font-bold text-xl">Create an Account</h1>
        <p className="text-center">
          Already have an account?{" "}
          <span className="text-link font-bold">
            <Link to="/">Log in</Link>
          </span>
        </p>
        {!auth?.loading && auth?.error && <Alert type="danger" msg={auth?.error}/>}
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors, touched, values, isValid, dirty }) => (
            <Form className="my-4">
              <div className="w-full lg:flex justify-between mb-4">
                <div className="w-full lg:w-[48%] mb-2 lg:mb-0">
                  <label htmlFor="First Name" className="font-bold">
                    First Name
                  </label>
                  <Field
                    name="first_name"
                    placeholder="Type here"
                    className="block border-[1px] border-brdlight h-[40px] w-full p-2  rounded-[4px] outline-none"
                  />
                  {errors.first_name && touched.first_name && (
                    <p className="text-sm text-danger mt-[1px]">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-[48%] mb-2 lg:mb-0">
                  <label htmlFor="" className="font-bold">
                    Last Name
                  </label>
                  <Field
                    name="last_name"
                    placeholder="Type here"
                    className="block border-[1px] border-brdlight h-[40px] w-full p-2  rounded-[4px] outline-none"
                  />
                  {errors.last_name && touched.last_name && (
                    <p className="text-sm text-danger mt-[1px]">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full mb-4">
                <label htmlFor="" className="font-bold">
                  Email Address
                </label>
                <Field
                  name="email"
                  placeholder="Type your email address here"
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
                <div className="my-2 w-full font-light">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={/[A-Z]/.test(values?.password)}
                      className="mr-2 h-[10] w-[10px] checkbox"
                    />
                    <label
                      htmlFor=""
                      className={
                        /[A-Z]/.test(values?.password)
                          ? "text-sm text-success"
                          : "text-sm"
                      }
                    >
                      Contains at least one uppercase letter
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 h-[10] w-[10px] checkbox"
                      checked={values?.password?.length > 7}
                    />
  
                    <label
                      htmlFor=""
                      className={
                        values?.password?.length > 7
                          ? "text-sm text-success"
                          : "text-sm"
                      }
                    >
                      Contains eight characters
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 h-[10] w-[10px] checkbox"
                      checked={/[0-9]/.test(values?.password)}
                    />
                    <label
                      htmlFor=""
                      className={
                        /[0-9]/.test(values?.password)
                          ? "text-sm text-success"
                          : "text-sm"
                      }
                    >
                      Contains at least one number
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 h-[10] w-[10px] checkbox"
                      checked={/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
                        values?.password
                      )}
                    />
                    <label
                      htmlFor=""
                      className={
                        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
                          values?.password
                        )
                          ? "text-sm text-success"
                          : "text-sm"
                      }
                    >
                      Contains at least one symbol
                    </label>
                  </div>
                </div>
              </div>
  
              <button
                disabled={!isValid || !dirty || auth?.loading}
                type="submit"
                className={`h-[48px] font-bold rounded-[4px] w-full text-white ${
                  !dirty || !isValid || auth?.loading ? "bg-btnDisabled" : "bg-btnActive"
                }`}
              >
                {!auth?.loading ? "Sign Up" : "Signing up... Please wait"}
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    );
};

export default SignUp;