import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Имя обязательно"),
  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});
