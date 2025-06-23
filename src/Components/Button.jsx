
export default function Button({ children, onAction, style='', icon = null }) {
  return (
    <button
      onClick={onAction}
      className={`${style} font-body rounded-full py-2 px-3 flex justify-center items-center hover:cursor-pointer capitalize gap-2`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
