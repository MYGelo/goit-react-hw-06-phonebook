import { useSelector } from 'react-redux';
import { Task } from 'components/contacts/contacts';
import { getTasks, getStatusFilter } from '../../Redux/selectors';
import css from './contactList.module.css';
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
    <ul className={css.contact__list}>
      {visibleTasks.map(task => (
        <li className={css.contact__list__item} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
