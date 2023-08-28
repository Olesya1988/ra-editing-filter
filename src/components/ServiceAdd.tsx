import { useSelector, useDispatch } from "react-redux";
import {
  changeServiceField,
  addService,
  editService,
} from "../actions/actionCreators";

export default function ServiceAdd() {
  const item = useSelector((state: any) => state.serviceAdd);
  const { id } = useSelector((state: any) => state.serviceEdit);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addService(item.name, item.price, id));
    dispatch(editService(""));
    item.name = "";
    item.price = "";
  };

  const handleCancel = () => {
    item.name = "";
    item.price = "";
    dispatch(changeServiceField(item.name, item.price));
    dispatch(editService(""));
  };

  return (
    <form className="add-input__contaiter" onSubmit={handleSubmit}>
      <input
        className="add-input__name"
        name="name"
        onChange={handleChange}
        value={item.name}
        placeholder="Введите услугу"
      />
      <input
        className="add-input__price"
        name="price"
        onChange={handleChange}
        value={item.price}
        placeholder="Введите стоимость"
      />
      <button className="save-button" type="submit">
        Save
      </button>
      {id && (
        <button className="cancel-button" type="reset" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
