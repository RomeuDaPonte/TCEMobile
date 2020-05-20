import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const verifyEmailSchema = yup.object({
  email: yup.string().required().email(),
});

const registerSchema = yup.object({
  businessName: yup.string().required(),
  userName: yup.string().required("Nome do utilizador necessário"),
  country: yup.string().required(),
  domainAdress: yup.string(),
  specialty: yup.string().required(),
  password: yup.string().required("Password é necessária"),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("password"), null],
      "Confirmar password tem de ser igual a password"
    ),
  promoCode: yup.string(),
});

export default {
  loginSchema,
  verifyEmailSchema,
  registerSchema,
};
