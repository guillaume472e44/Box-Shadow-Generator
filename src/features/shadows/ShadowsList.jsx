import { useSelector, useDispatch } from "react-redux";
import Shadow from "./Shadow";
import { addShadow } from "./shadows";

export default function ShadowsList() {
  const shadows = useSelector((state) => state.shadows);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center p-8  border-b border-gray-300">
        <p className="font-semibold text-lg text-zinc-600 underline">
          Shadow's properties
        </p>
        <button
          onClick={() => dispatch(addShadow())}
          className=" bg-sky-500 text-sm w-40 rounded-tl-full rounded-br-full py-1  text-white cursor-pointer hover:bg-sky-400 "
        >
          Add Shadow
        </button>
      </div>
      {shadows && (
        <ul className="max-h-128 overflow-auto">
          {shadows.map((shadow, index) => (
            <Shadow key={shadow.id} data={shadow} index={index} />
          ))}
        </ul>
      )}
    </>
  );
}
