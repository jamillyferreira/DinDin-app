import { useTransactions } from "../context/TransactionContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import interpretMessage from "../utils/interpretMessage";
import InputBar from "../components/chatComponents/InputBar";
import Message from "../components/chatComponents/Message";

export const Chat = () => {
  const { addTransaction } = useTransactions();

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            from: "bot",
            text: "Olá! 👋 Eu sou o Din, seu parceiro de bolso. Digite seus gastos ou entradas de forma natural, como: Refrigerante 6 reais ou Salário 2000 reais.",
            timestamp: new Date().toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Scroll para o final da janela de chat quando uma nova mensagem é adicionada
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  const handleSendMessage = (text) => {
    const interpretation = interpretMessage(text);

    // Mensagem do usuario
    const newUserMessage = {
      id: Date.now(),
      from: "user",
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
      from: "bot",
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

    addTransaction({
      id: Date.now(),
      description: interpretation.description,
      transactionType: interpretation.transactionType, //Entrada || Gasto
      interpretedData: interpretation,
      category: interpretation.category,
      value: interpretation.value,
      installments: interpretation.installments,
      date: interpretation.date,
    });
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* cabeçalho */}
      <div className="flex items-center gap-3 bg-primary px-3 py-4">
        <Link to="/">
          <IoChevronBackOutline size={23} className="text-white" />
        </Link>
        <h1 className="text-white font-medium">Din</h1>
      </div>
      {/* area de mensagem */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pb-1">
          <div className="space-y-4 p-4 min-h-full flex flex-col justify-end">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={msg.id || index}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <Message message={msg} />
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
          </div>
        </div>
      </div>
      {/* area do input */}
      <div className="sticky bottom-0 pb-3">
        <InputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
