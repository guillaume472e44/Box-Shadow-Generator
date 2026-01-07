import { useState } from "react";
import { useSelector } from "react-redux";
import getBoxShadowValue from "../utils/getBoxShadowValue";

export default function BoxVisualization() {
  const [copy, setCopy] = useState(false);
  const shadows = useSelector((state) => state.shadows);
  const boxProperties = useSelector((state) => state.boxProperties);

  const cssBoxProperties = {
    borderRadius: boxProperties.find(
      (property) => property.name === "Border radius"
    ).value,
    height: boxProperties.find((property) => property.name === "Height").value,
    width: boxProperties.find((property) => property.name === "Width").value,
    backgroundColor: boxProperties.find(
      (property) => property.name === "Background Color"
    ).value,
  };

  function handleCopy() {
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);

    navigator.clipboard.writeText(`
    border-radius: ${cssBoxProperties.borderRadius}px;
    height: ${cssBoxProperties.height}px;
    width: ${cssBoxProperties.width}px;
    background: ${cssBoxProperties.backgroundColor};
    box-shadow: ${getBoxShadowValue(shadows)};
`);
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 ">
      <div
        style={{
          boxShadow: `${getBoxShadowValue(shadows).slice(0, -1)}`,
          borderRadius: `${cssBoxProperties.borderRadius}px`,
          height: `${cssBoxProperties.height}px`,
          width: `${cssBoxProperties.width}px`,
          backgroundColor: `${cssBoxProperties.backgroundColor}`,
        }}
      ></div>
      <div className="relative max-w-lg xl:min-w-lg font-mono bg-zinc-600 text-neutral-200 text-lg p-4 mt-8 rounded">
        {copy && (
          <div className="absolute z-1 w-full h-full top-0 left-0 bg-green-500/80">
            <p className="text-center mt-17 font-bold text-3xl -rotate-25 ">
              Copied to clipboard !
            </p>
          </div>
        )}
        <button
          onClick={handleCopy}
          className="absolute z-0 top-2 right-2 bg-green-600 text-white px-2 rounded cursor-pointer hover:bg-green-700"
        >
          Copy
        </button>
        <p>
          <span className="text-cyan-300">border-radius:</span>{" "}
          {cssBoxProperties.borderRadius}px;
        </p>

        <p>
          <span className="text-cyan-300">height:</span>{" "}
          {cssBoxProperties.height}px;
        </p>
        <p>
          <span className="text-cyan-300">width:</span> {cssBoxProperties.width}
          px;
        </p>
        <p>
          <span className="text-cyan-300">background:</span>{" "}
          {cssBoxProperties.backgroundColor};
        </p>
        <p>
          <span className="text-cyan-300">box-shadow:</span>{" "}
          {getBoxShadowValue(shadows)}
        </p>
      </div>
    </div>
  );
}
