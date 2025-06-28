import { useForm } from "react-hook-form";
// import { useState } from "react";
import AuthFooter from "../components/inputsForm/AuthFooter";
import Button from "../components/inputsForm/Button";
import Input from "../components/inputsForm/Input";
import Loading from "../components/inputsForm/Loading";
import { PiLockKey, PiUser, PiEnvelope } from "react-icons/pi";

function Signup() {
  // const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log({ errors });

  console.log("renderizou");

  const password = watch("password"); // Pega o valor da senha original
  const onSubmit = (data) => {
    console.log("Dados enviados:", data);

    const { name, email, password } = data;

    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("Usuário salvo com sucesso!");

    // setIsLoading(true);

    // setTimeout(() => {
    //   setIsLoading(false); // Volta ao normal
    // }, 2000);
  };

  return (
    <div className="min-h-screen py-3 px-4 flex flex-col justify-center">
      <h2 className="text-center text-primary font-bold text-3xl mb-10">
        Criar conta
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nome"
          icon={PiUser}
          type="text"
          placeholder="Digite seu nome"
          {...register("name", {
            required: "O nome é obrigatório",
            minLength: {
              value: 3,
              message: "O nome precisa ter pelo menos 3 caracteres",
            },
            validate: (value) => {
              const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;
              return (
                onlyLettersRegex.test(value) ||
                "O nome deve conter apenas letras"
              );
            },
          })}
          error={errors.name?.message}
        />
        <Input
          label="E-mail"
          icon={PiEnvelope}
          type="email"
          placeholder="exemplo@gmail.com"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um e-mail válido",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          icon={PiLockKey}
          type="password"
          placeholder="******"
          {...register("password", {
            required: "A senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha precisa ter pelo menos 6 caracteres",
            },
          })}
          error={errors.password?.message}
        />
        <Input
          label="Confirmar senha"
          icon={PiLockKey}
          type="password"
          placeholder="******"
          {...register("passwordConfirmation", {
            required: "Confirmação de senha é obrigatório",
            validate: (value) =>
              value === password || "As senhas não coincidem",
          })}
          error={errors.passwordConfirmation?.message}
        />
        <Button
          type="submit"
          text="Criar conta"
          // disabled={isLoading}
          // text={
          //   isLoading ? (
          //     <div className="flex items-center justify-center">
          //       <Loading />
          //     </div>
          //   ) : (
          //     "Criar conta"
          //   )
          // }
        />
        <div className="flex flex-col gap-4">
          <AuthFooter
            GoogleText="Criar conta com google"
            footerText="Já tem conta?"
            actionText="Fazer login"
            route="/login"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
