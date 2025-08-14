import { useForm } from "react-hook-form";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";
import { AuthFooter } from "../components/form/AuthFooter";
import { PiEnvelope, PiLockKey } from "react-icons/pi";
import { Header } from "../components/form/Header";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      alert(`Bem-vindo`);
    } else alert("E-mail ou senha incorretos");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4">
      <Header
        text="Login"
        description="Faça login na sua conta para continuar"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        <Button type="submit" text="Entrar" />

        <div className="flex flex-col gap-4">
          <AuthFooter
            GoogleText="Entrar com google"
            footerText="Ainda não tem conta?"
            actionText="Crie agora"
            route="/signup"
          />
        </div>
      </form>
    </div>
  );
};
