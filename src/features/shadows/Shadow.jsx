import { useState } from "react";
import { removeShadow } from "./shadows";
import { useDispatch } from "react-redux";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import CheckBox from "./CheckBox";
import chevron from "../../assets/chevron.svg";

export default function Shadow({ data, index }) {
  const [toggleShadow, setToggleShadow] = useState(false);
  const dispatch = useDispatch();

  const shadowInputs = data.inputs.map((input, index) =>
    input.type === "range" ? (
      <ShadowRange key={index} data={input} id={data.id} />
    ) : (
      <ShadowColorPicker key={index} data={input} id={data.id} />
    )
  );

  return (
    <li className="border-b border-gray-300">
      <button
        onClick={() => setToggleShadow(!toggleShadow)}
        className=" w-full flex justify-between p-4 cursor-pointer bg-gray-100"
      >
        <span className="font-semibold text-lg">Shadow {index + 1}</span>
        <img
          src={chevron}
          alt="chevron"
          className="w-4"
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
        />
      </button>
      {toggleShadow && (
        <div className="px-8 pb-12">
          <div className="flex items-center py-4 border-b border-zinc-200 border-dashed">
            <CheckBox name="active" id={data.id} />
            <CheckBox name="inset" id={data.id} />
            <button
              onClick={() => dispatch(removeShadow(data.id))}
              className=" bg-rose-600 text-sm w-40 rounded-tr-full rounded-bl-full py-1 text-white cursor-pointer hover:bg-rose-500 ms-auto"
            >
              Remove Shadow
            </button>
          </div>
          {shadowInputs}
        </div>
      )}
    </li>
  );
}
