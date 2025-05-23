import { IoChevronBackOutline } from "react-icons/io5";
import interpretMessage from "../utils/interpretMessage";
import Navbar from "../components/Navbar";
import InputBar from "../components/InputBar";
import ChatWindow from "../components/ChatWindow";
import { useState } from "react";
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Olá! 👋 Eu sou o Din, seu parceiro de bolso. Digite seus gastos ou entradas de forma natural, como: Refrigerante 6 reais ou Salário 2000 reais.",
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const handleSendMessage = (text) => {
    const interpretation = interpretMessage(text);

    // Mensagem do usuario
    const newUserMessage = {
      id: Date.now(),
      type: "user",
      text,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newUserMessage]);

    // Resposta do sistema
    const systemReply = {
      id: Date.now() + 1,
      type: "bot",
      text: `✅ Registro concluído!`,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      meta: {
        description: interpretation.description,
        transactionType: interpretation.transactionType,
        category: interpretation.category,
        value: interpretation.value,
        installments: interpretation.installments,
        date: interpretation.date,
      },
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, systemReply]);
    }, 600);
  };
  return (
    <div className="h-screen flex flex-col">
      {/* cabeçalho */}
      <div className="flex items-center gap-5 bg-blue-900 px-6 py-3">
        <button>
          <IoChevronBackOutline size={23} className="text-white" />
        </button>
        <h1 className="text-white font-medium">Din</h1>
      </div>
      {/* area de mensagem */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pb-1">
          <ChatWindow messages={messages} />
        </div>
      </div>
      {/* area do input */}
      <div className="sticky bottom-0 pb-1">
        <InputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
export default Chat;
