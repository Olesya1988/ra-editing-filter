import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators";

export default function ServiceFilter() {
  const { filter } = useSelector((state: any) => state.serviceFilter);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { value } = e.target;
    dispatch(filterService(value));
  };

  return (
    <div className="filter__container">
      <input
        className="filter__input"
        onChange={handleChange}
        value={filter}
        placeholder="Найти..."
      />
    </div>
  );
}
