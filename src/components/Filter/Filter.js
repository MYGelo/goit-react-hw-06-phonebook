import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../Redux/filtersSlice';
import { nanoid } from 'nanoid';
import { getStatusFilter } from 'Redux/selectors';

const filterInputId = nanoid();

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  const onChange = e => {
    dispatch(change(e.target.value));
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
