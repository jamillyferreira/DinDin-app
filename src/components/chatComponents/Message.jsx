import { FaCreditCard } from "react-icons/fa6";
import {
  FcMoneyTransfer,
  FcDocument,
  FcPlanner,
  FcBookmark,
  FcExternal,
  FcInternal,
} from "react-icons/fc";

const ICON_MAP = {
  description: <FcDocument size={16} className="inline mr-1" />,
  category: <FcBookmark size={16} className="inline mr-1" />,
  type: {
    entrada: <FcExternal size={16} className="inline mr-1" />,
    gasto: <FcInternal size={16} className="inline mr-1" />,
  },
  value: <FcMoneyTransfer size={16} className="inline mr-1" />,
  installments: <FaCreditCard size={16} className="inline mr-1" />,
  date: <FcPlanner size={16} className="inline mr-1" />,
};

const Message = ({ message }) => {
  const isUser = message.from === "user";
  return (
    <div
      className={`inline-block whitespace-pre-line max-w-[85%] px-4 py-2 rounded-2xl text-sm break-words leading-snug ${
        isUser ? "bg-primary text-white" : "bg-[#EAEAEA] text-darkGray"
      }`}
    >
      <div>
        <p className="mb-2">{message.text}</p>
        <span className="font-light text-right">{message.timestamp}</span>
      </div>
      {message.meta && (
        <div className="mt-4 bg-white space-y-1 py-2 px-3 border border-gray-300 rounded-md">
          {/* Descricao */}
          <div className="flex items-center">
            <span className="font-medium">
              {ICON_MAP.description}
              Descrição:
            </span>
            <span className="ml-1">{message.meta.description}</span>
          </div>

          {/* Categoria */}
          <div className="flex items-center">
            <span className="font-medium">
              {ICON_MAP.category}
              Categoria:
            </span>
            <span className="ml-2">{message.meta.category.label}</span>
          </div>

          {/* Tipo */}
          <div className="flex items-center">
            <span className="font-medium">
              {ICON_MAP.type[message.meta.transactionType]}
              Tipo:
            </span>
            <span className="ml-1">
              {message.meta.transactionType === "entrada" ? "Entrada" : "Gasto"}
            </span>
          </div>

          {/* Valor */}
          <div className="flex items-center">
            <span className="font-medium">
              {ICON_MAP.value}
              Valor:</span>
            <span className="ml-1">
              {typeof message.meta.value === "number"
                ? `R$${message.meta.value.toFixed(2).replace(".", ",")}`
                : message.meta.value}
            </span>
          </div>

          {/* Parcelas(se houver) */}
          {message.meta.installments && (
            <div className="flex items-center">
              <span className="font-medium">
                {ICON_MAP.installments}
                Parcela:
              </span>
              <span className="ml-1">{message.meta.installments}x</span>
            </div>
          )}

          {/* Data */}
          <div className="flex items-center">
            <span className="font-medium">
              {ICON_MAP.date}
              Data:
            </span>
            <span className="ml-1">{message.meta.date}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
