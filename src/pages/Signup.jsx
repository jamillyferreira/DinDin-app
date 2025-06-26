import Button from "../components/inputsForm/Button";
import Input from "../components/inputsForm/Input";
import {
  PiLockKey,
  PiEyeLight,
  PiEyeSlash,
  PiUser,
  PiEnvelope,
} from "react-icons/pi";

function Signup() {
  return (
    <div className="min-h-screen py-3 px-4 flex flex-col justify-center gap-10">
      <h2 className="text-center text-primary font-bold text-2xl">
        Criar conta
      </h2>
      <div className="flex flex-col gap-4">
        <Input
          label="Nome e sobrenome"
          icon={PiUser}
          type="text"
          placeholder="Digite seu nome e sobrenome"
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
        <Button text='Criar conta'/>
      </div>
    </div>
  );
}

export default Signup;
