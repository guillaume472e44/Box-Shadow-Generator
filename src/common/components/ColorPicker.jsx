export default function ColorPicker({ data, handleChange }) {
  return (
    <div>
      <p> {data.name} </p>
      <div className="flex mt-2 items-center">
        <input
          className="grow border border-gray-200 py-1 px-2 focus:outline-1 outline-gray-400 "
          type="text"
          value={data.value}
          onChange={handleChange}
        />
        <input
          className="cursor-pointer ms-1 h-10"
          type="color"
          value={data.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

