import { LiaUserCircle, LiaPlusSolid, LiaBuffer } from "react-icons/lia";
import { Link } from "react-router-dom";

export const Navbar = ({ onToggleProfile }) => {
  return (
    <nav className="bg-white flex justify-around items-center py-2 border-t text-sm fixed w-full bottom-0 z-50">
      <button className="flex flex-col items-center">
        <span>
          <LiaBuffer size={25} />
        </span>
        <span className="text-gray-700 font-medium">Resumo</span>
      </button>
      <Link to="/chat">
        <span>
          <LiaPlusSolid
            size={26}
            className="border-2 border-gray-800 rounded-md"
          />
        </span>
      </Link>

      {/* botao de perfil */}
      <button onClick={onToggleProfile} className="flex flex-col items-center">
        <span>
          <LiaUserCircle size={25} />
        </span>
        <span className="text-gray-700 font-medium">Perfil</span>
      </button>
    </nav>
  );
};
