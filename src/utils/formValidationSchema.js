import * as yup from "yup";

export const signupSchema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Wrong email format").required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("You must enter password"),
  });

  export const signInSchema = yup.object().shape({
    email: yup.string().email("Wrong email format").required("Email is required"),
    password: yup.string().required("You must enter password"),
  });

  export const itemSchema = yup.object().shape({
    name: yup.string().required("Email is required"),
    description: yup.string().required("You must enter password"),
  });