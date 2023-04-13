// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
// Импортируем объект значений фильтра
// import { change } from '../../Redux/filtersSlice';
import { nanoid } from 'nanoid';

//test
import { Button } from 'components/Button/Button';

import { statusFilters } from 'Redux/constants';
import { getStatusFilter } from 'Redux/selectors';
import { setStatusFilter } from 'Redux/filtersSlice';

const filterInputId = nanoid();

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filters);
  const filter2 = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  const onChange = e => {
    dispatch(setStatusFilter(e.target.value));
    console.log(filter);
  };

  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        value={filter2}
        onChange={onChange}
      ></input>

      <Button
        selected={filter2 === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter2 === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter2 === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
