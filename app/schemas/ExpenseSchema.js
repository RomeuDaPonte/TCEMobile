import * as yup from "yup";

const expenseSchema = yup.object().shape({
  source: yup.string().required().label("Fonte de despasa"),
  amount: yup.number().required().min(0.01).label("Montante"),
  description: yup.string().nullable().label("Descrição"),
  paymentMethod: yup.string().required().label("Método de pagamento"),
  date: yup.date().required().label("Data"),
  isPaid: yup.bool().required().label("Pago ?"),
});

export default {
  expenseSchema,
};
