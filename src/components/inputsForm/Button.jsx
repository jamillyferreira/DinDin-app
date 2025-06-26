function Button({ text }) {
  return (
    <div className="mt-3">
      <button className="w-full border-none bg-primary text-white font-medium py-2 rounded-full">
        {text}
      </button>
    </div>
  );
}
export default Button;
