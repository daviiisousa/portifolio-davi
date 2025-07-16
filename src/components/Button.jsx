export function Button({ className, children, type }) {
  return (
    <button
      type={type}
      className={`rounded-[25px] text-[20px] py-3.5 px-5 cursor-pointer  font-bold ${className} hover:scale-105 transition-all hover:shadow-2xl`}
    >
      {children}
    </button>
  );
}
