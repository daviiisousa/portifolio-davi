export function Button({ className, children, type, theme, disabled }) {
  function getTheme() {
    switch (theme) {
      case "gradient":
        return "bg-linear-to-r from-blue-500 to-purple-400 text-white";
      default:
        return "bg-white border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-100";
    }
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={`rounded-[25px] text-[20px] py-3.5 px-5 cursor-pointer font-bold ${className} hover:scale-105 transition-all hover:shadow-2xl ${getTheme()}`}
    >
      {disabled ? <span>Enviando...</span> : children}
    </button>
  );
}
