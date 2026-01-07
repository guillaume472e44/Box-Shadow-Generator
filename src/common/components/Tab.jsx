export default function Tab({ name, tabSelect, isFocus }) {
  return (
    <div
      onClick={tabSelect}
      className="min-w-40 p-2 ml-2 rounded-t-2xl font-bold  bg-gray-50 hover:bg-gray-100 cursor-pointer text-slate-400 text-center"
    >
      <button
        className={`cursor-pointer ${
          isFocus ? "text-slate-800 after:scale-125" : "after:scale-0"
        } 
        relative after:absolute after:w-full after:h-0.75 after:rounded-t-full after:bg-gray-400 after:left-0 after:-bottom-1.5 after:transition-transform after:duration-200 after:ease-out  motion-reduce:transition-transform `}
      >
        {name}
      </button>
    </div>
  );
}
