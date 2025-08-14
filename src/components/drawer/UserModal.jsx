import { FaChevronRight } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SwitchBtn from "./SwitchBtn";
import { useEffect, useState } from "react";

function UserModal() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const isLogged = !!user;

  return (
    <div>
      {/* Avatar + Dados */}
      <div className="flex items-center gap-4 mb-11">
        {/* profile avatar */}
        <div className="bg-primary rounded-full w-10 h-10 flex justify-center items-center text-white font-medium">
          {isLogged ? user.name?.slice(0, 2).toUpperCase() : "JF"}
        </div>
        {/* profile username */}
        <div className="flex flex-col gap-1">
          {isLogged ? (
            <>
              <p className="font-medium text-darkGray">{user.name}</p>
              <span className="text-xs text-lightGray">{user.email}</span>
            </>
          ) : (
            <Link to="/login">
              <p className="font-medium text-darkGray">Entrar | Criar conta</p>
              <span className="text-xs text-lightGray">
                Sicronizar em outros dispositivos
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Aparencia */}
      <div className="border-b mb-5">
        <SwitchBtn />
      </div>

      {/* Somente se estiver logado */}
      {isLogged && (
        <>
          <div className="border-b mb-5">
            <Link to="/update-password">
              <p className="text-sm text-lightGray font-medium mb-2 flex items-center justify-between">
                Alterar senha
                <FaChevronRight className="text-primary" />
              </p>
            </Link>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null); // Atualiza visual
            }}
          >
            <p className="text-danger text-sm font-medium flex items-center gap-2">
              <RiLogoutCircleLine size={16} />
              Sair do DinDin
            </p>
          </button>
        </>
      )}
    </div>
  );
}

export default UserModal;
