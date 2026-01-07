import { useDispatch, useSelector } from "react-redux";
import { updateCheckBox } from "./shadows";

export default function CheckBox({ name, id }) {
  const dispatch = useDispatch();
  const currentShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === id)
  );

  return (
    <div className="me-4">
      <input
        type="checkbox"
        id={`box-${name}-${id}`}
        onChange={() => dispatch(updateCheckBox({ name, id }))}
        checked={currentShadow[name]}
      />
      <label htmlFor={`box-${name}-${id}`}>
        {" "}
        {name.charAt(0).toUpperCase().concat(name.slice(1))}
      </label>
    </div>
  );
}
