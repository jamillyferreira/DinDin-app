function Button({ text, type }) {
  return (
    <div className="mt-3">
      <button
        type={type}
        className="w-full border-none bg-primary text-white font-medium py-2 rounded-full hover:bg-greenLight transition-colors duration-200 cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
