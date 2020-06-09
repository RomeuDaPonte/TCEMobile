import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const registerSchema = yup.object({
  userName: yup.string().required("Nome do utilizador necessário"),
  email: yup.string().email().required("Email é necessário"),
  password: yup.string().required("Password é necessária"),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("password"), null],
      "Confirmar password tem de ser igual a password"
    ),
});

export default {
  loginSchema,
  registerSchema,
};
