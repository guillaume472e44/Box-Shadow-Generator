import { useDispatch } from "react-redux";
import { updateBoxValue } from "./boxProperties";
import Range from "../../common/components/Range";

export default function BoxRange({ data }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(
      updateBoxValue({
        inputNumber: data.inputNumber,
        value: e.target.value,
      })
    );
  }

  return <Range data={data} handleChange={handleChange} />;
}
