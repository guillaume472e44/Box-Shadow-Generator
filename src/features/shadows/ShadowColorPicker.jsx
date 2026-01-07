import { useDispatch } from "react-redux";
import { updateShadowValue } from "./shadows";
import ColorPicker from "../../common/components/ColorPicker";

export default function ShadowColorPicker({ data, id }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(
      updateShadowValue({
        id,
        inputNumber: data.inputNumber,
        value: e.target.value,
      })
    );
  }

  return <ColorPicker data={data} handleChange={handleChange} />;
}
