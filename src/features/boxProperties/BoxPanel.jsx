import { useSelector } from "react-redux";
import BoxColorPicker from "./BoxColorPicker";
import BoxRange from "./BoxRange";

export default function BoxPanel() {
  const boxProperties = useSelector((state) => state.boxProperties);

  const boxPanelInputs = boxProperties.map((box, index) =>
    box.type === "range" ? (
      <BoxRange key={index} data={box} />
    ) : (
      <BoxColorPicker key={index} data={box} />
    )
  );

  return (
    <div className="bg-gray-50 rounded-t-4xl p-8">
      <p className="font-semibold underline text-zinc-600 text-lg mb-16"> Shape of the box</p>
      {boxPanelInputs}
    </div>
  );
}
