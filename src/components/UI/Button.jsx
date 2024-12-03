export const CustomButton = ({ text, className }) => {
  return (
    <button
      className={`w-full text-center text-lg font-bold bg-accent hover:bg-background py-4 rounded-xl ${className}`}
      type="button"
    >
      {text}
    </button>
  );
};
