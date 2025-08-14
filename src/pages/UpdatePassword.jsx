import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { Header } from "../components/form/Header";
import { Input } from "../components/form/Input";
import { PiLockKey } from "react-icons/pi";
import { Button } from "../components/form/Button";
import { useForm } from "react-hook-form";

export const UpdatePassword = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="px-4">
      <Link to="/">
        <IoChevronBackOutline size={23} className="text-gray-600 mt-5" />
      </Link>
      <div className="mt-16">
        <Header text="Atualize sua senha" />
        {/* <p>Insira sua senha atual e nova senha</p> */}
        <form className="flex flex-col gap-4">
          <Input
            label="Senha"
            icon={PiLockKey}
            type="password"
            id="password"
            placeholder="Digite sua senha atual"
            {...register("password", {
              required: "Digite sua senha atual",
              minLength: {
                value: 6,
                message: "A senha precisa ter pelo menos 6 caracteres",
              },
            })}
            error={errors.password?.message}
          />
          <Input
            label="Nova senha"
            icon={PiLockKey}
            type="password"
            id="password"
            placeholder="Digite sua nova senha"
            {...register("newpassword", {
              required: "Digite sua nova senha",
              minLength: {
                value: 6,
                message: "A senha precisa ter pelo menos 6 caracteres",
              },
            })}
            error={errors.password?.message}
          />
          <Button text="Mudar senha" />
        </form>
      </div>
    </div>
  );
};
