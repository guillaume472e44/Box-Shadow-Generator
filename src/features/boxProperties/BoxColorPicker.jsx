import { useDispatch } from "react-redux";
import { updateBoxValue } from "./boxProperties";
import ColorPicker from "../../common/components/ColorPicker";

export default function BoxColorPicker({ data }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(
      updateBoxValue({
        inputNumber: data.inputNumber,
        value: e.target.value,
      })
    );
  }

  return <ColorPicker data={data} handleChange={handleChange} />;
}
