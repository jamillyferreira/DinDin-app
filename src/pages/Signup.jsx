import { useState } from "react";
import AuthFooter from "../components/inputsForm/AuthFooter";
import Button from "../components/inputsForm/Button";
import Input from "../components/inputsForm/Input";
import {
  PiLockKey,
  PiEyeLight,
  PiEyeSlash,
  PiUser,
  PiEnvelope,
} from "react-icons/pi";
import Loading from "../components/inputsForm/Loading";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Mostra o Loading

    setTimeout(() => {
      console.log("Simulacao de envio");
      setIsLoading(false); // Volta ao normal
    }, 2000);
  };

  return (
    <div className="min-h-screen py-3 px-4 flex flex-col justify-center">
      <h2 className="text-center text-primary font-bold text-3xl mb-10">
        Criar conta
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Nome"
          icon={PiUser}
          type="text"
          placeholder="Digite seu nome"
        />
        <Input
          label="E-mail"
          icon={PiEnvelope}
          type="email"
          placeholder="exemplo@gmail.com"
        />
        <Input
          label="Senha"
          icon={PiLockKey}
          type="password"
          placeholder="******"
        />
        <Input
          label="Confirmar senha"
          icon={PiLockKey}
          type="password"
          placeholder="******"
        />
        <Button
          type="submit"
          disabled={isLoading}
          text={
            isLoading ? (
              <div className="flex items-center justify-center">
                <Loading />
              </div>
            ) : (
              "Criar conta"
            )
          }
        />
        <div className="flex flex-col gap-4">
          <AuthFooter
            GoogleText="Criar conta com google"
            footerText="Já tem conta?"
            actionText="Fazer login"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
