export function IconButton({ icon, title, description }) {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      {icon}
      <div className="flex flex-col">
        <h3 className="font-medium text-zinc-900 text-[18px] max-lg:text-[16px]">
          {title}
        </h3>
        <p className="text-zinc-500 max-sm:text-sm">{description}</p>
      </div>
    </div>
  );
}
