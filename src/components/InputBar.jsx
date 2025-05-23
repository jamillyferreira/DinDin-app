import { useState } from "react";
import { IoSend } from "react-icons/io5";

const InputBar = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Enviar messagem:", message);
    onSendMessage(message)
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center px-4 gap-2 w-full">
      <input
        type="text"
        placeholder="Digite seu gasto ou ganho"
        className="flex-1 p-2 bg-[#EAEAEA] rounded-md text-sm outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>
        <IoSend className="text-blue-900" size={25} />
      </button>
    </div>
  );
};

export default InputBar;
