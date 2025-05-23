import Message from "./Message";
const ChatWindow = ({ messages }) => {
  return (
    <div className="space-y-4 p-4 min-h-full flex flex-col justify-end">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={msg.id || index}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Message message={msg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
