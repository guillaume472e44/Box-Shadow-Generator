export default function Range({ data, handleChange }) {
  return (
    <div className="my-4">
      <div className="flex justify-between items-baseline">
        <p> {data.name} </p>
        <div className="flex items-baseline mb-2 ">
          <input
            type="number"
            min={data.minMax[0]}
            max={data.minMax[1]}
            value={data.value}
            onChange={handleChange}
            className="w-16 h-8 me-2 rounded-lg px-1 border border-gray-200 text-center"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
          type="range"
          min={data.minMax[0]}
          max={data.minMax[1]}
          value={data.value}
          onChange={handleChange}
          className="w-full h-0.5 cursor-pointer  "
        />
        <div className="absolute -z-10 top-[1/2] left-1/2 bg-gray-200 h-4 w-0.5"></div>
      </div>
    </div>
  );
}
