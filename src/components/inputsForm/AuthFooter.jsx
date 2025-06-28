import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function AuthFooter({ GoogleText, footerText, actionText, route }) {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Linha "OU" */}
      <div className="flex items-center gap-3 w-2/3">
        <hr className="flex-grow border-lightGray"></hr>
        <span className="text-lightGray text-sm">OU</span>
        <hr className="flex-grow border-lightGray"></hr>
      </div>
      {/* Botão do Google */}
      <button
        type="button"
        className="w-full flex justify-center gap-3 border border-gray-400 py-2 rounded-full hover:bg-greenLight hover:bg-opacity-5 hover:border-greenLight text-lightGray font-medium text-sm cursor-pointer"
      >
        <FcGoogle size={20} />
        {GoogleText}
      </button>
      {/* Link dinâmico */}
      <p className="text-lightGray font-medium text-sm">
        {footerText}
        <Link to={route} className="text-primary font-bold ml-1">
          {actionText}
        </Link>
      </p>
    </div>
  );
}

export default AuthFooter;
