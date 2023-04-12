// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
// Импортируем объект значений фильтра
import { change } from '../../Redux/filtersSlice';
import { nanoid } from 'nanoid';

const filterInputId = nanoid();

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  // const handleFilterChange = filter => dispatch(change(filter));

  const onChange = e => {
    dispatch(change(e.target.value));
    console.log(dispatch(change(e.target.value)));
  };
  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
};
