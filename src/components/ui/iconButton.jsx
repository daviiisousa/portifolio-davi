export function IconButton({ icon, title, description }) {
  return (
    <div className="flex gap-3 items-center">
      {icon}
      <div className="flex flex-col">
        <h3 className="font-medium text-zinc-900 text-[18px]">{title}</h3>
        <p className="text-zinc-500">{description}</p>
      </div>
    </div>
  );
}
