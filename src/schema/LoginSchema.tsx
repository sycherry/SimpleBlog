import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().min(5, "Password is too short - should be 5 chars minimum."),
});
