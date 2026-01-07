import { useDispatch } from "react-redux";
import { updateShadowValue } from "./shadows";
import Range from "../../common/components/Range";

export default function ShadowRange({ data, id }) {
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

  return <Range data={data} handleChange={handleChange} />;
}
