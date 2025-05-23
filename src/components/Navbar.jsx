import { LiaUserCircle, LiaPlusSolid, LiaBuffer } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-around items-center py-2 border-t text-sm fixed w-full bottom-0">
      <div className="flex flex-col items-center">
        <span>
          <LiaBuffer size={25} />
        </span>
        <span className="text-gray-700 font-medium">Resumo</span>
      </div>
      <div>
        <span>
          <LiaPlusSolid
            size={26}
            className="border-2 border-gray-800 rounded-md"
          />
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <LiaUserCircle size={25} />
        </span>
        <span className="text-gray-700 font-medium">Perfil</span>
      </div>
    </nav>
  );
};
export default Navbar;
