// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
// Импортируем объект значений фильтра
import { statusFilters } from '../constants';
import { getStatusFilter } from '../../Redux/selectors';
import { setStatusFilter } from '../../Redux/Actions';

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);
  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
