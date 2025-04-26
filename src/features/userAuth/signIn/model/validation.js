import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
});
