import React from "react";
import SignUpForm from "../../features/userAuth/signUp/ui/SignUpForm";

const SignUpScreen = () => {
  // Тэк, логика навигации остается здесь, так как это уровень страницы
  // и он отвечает за взаимодействие с другими страницами

  const handleSignUp = (values) => {
    console.log("Данные формы:", values);
    // TODO: Здесь будет вызов API для регистрации
    // Возможно, эта логика будет вынесена в отдельный модуль в слое `features` или `entities`
  };

  return (
    // Передаем обработчик отправки формы в компонент формы
    <SignUpForm onSubmit={handleSignUp} />
  );
};

export default SignUpScreen;
