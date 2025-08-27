export function Input({
  label,
  id,
  name,
  type,
  placeholder,
  className,
  isInput = true,
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-medium text-gray-600" htmlFor={id}>
        {label}
      </label>
      {isInput ? (
        <input
          id={id}
          name={name}
          type={type}
          required
          className="border border-gray-300 rounded-md px-3 py-1.5"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={id}
          name={name}
          required
          rows={6}
          className="border border-gray-300 rounded-md px-3 py-1.5"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
