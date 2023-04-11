import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { getTasks, getStatusFilter } from '../../Redux/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../Redux/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.container}>
      {visibleTasks.map(task => (
        <li className={css.list} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
