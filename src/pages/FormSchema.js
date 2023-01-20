import * as Yup from "yup";
export const FormSchema = Yup.object({
  email: Yup.string().email().required("Email is must"),

  pass: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,100}$/,
      "Please chose Storng Password"
    )
});
