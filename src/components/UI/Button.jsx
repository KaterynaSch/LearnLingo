export const Button = ({ text, className }) => {
  return (
    <button
      className={`w-full text-center text-lg font-bold bg-accent hover:bg-accentLight py-4 rounded-xl ${className}`}
      type="submit"
    >
      {text}
    </button>
  );
};
