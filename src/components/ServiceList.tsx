import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  editService,
  changeServiceField,
} from "../actions/actionCreators";

export default function ServiceList() {
  const items = useSelector((state: any) => state.serviceList);
  const filter = useSelector((state: any) => state.serviceFilter);
  const dispatch = useDispatch();
  const format = /[\wа-яА-Я]/;
  let filterItems = [];

  if (filter.filter !== "" && filter.filter.search(format) !== -1) {
    filterItems = items.filter(
      (o: any) =>
        o.name.toLowerCase().indexOf(filter.filter.toLowerCase()) !== -1
    );
  } else {
    filterItems = items;
  }

  const handleRemove = (id: string) => {
    dispatch(removeService(id));
    dispatch(editService(""));
  };

  const handleEdit = (o: any) => {
    const { id, name, price } = o;
    dispatch(changeServiceField("name", String(name)));
    dispatch(changeServiceField("price", String(price)));
    dispatch(editService(id));
  };

  return (
    <ul>
      {filterItems.map((o: any) => (
        <li key={o.id} className="item">
          {o.name}: {o.price}
          <div className="buttons">
            <button className="edit__button" onClick={() => handleEdit(o)}>
              &#9998;
            </button>
            <button
              className="delete__button"
              onClick={() => handleRemove(o.id)}
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
