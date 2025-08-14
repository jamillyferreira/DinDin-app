export const Header = ({ text, description }) => {
  return (
    <div>
      <h2 className="text-center text-primary font-bold text-2xl">{text}</h2>
      <p className="text-lightGray text-xs text-center my-2">{description}</p>
    </div>
  );
};
