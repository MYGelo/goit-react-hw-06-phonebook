import { useSelector, useDispatch } from 'react-redux';
import { getTasks, getStatusFilter } from '../../Redux/selectors';
import css from './contactList.module.css';
import { deleteTask } from 'Redux/contactSlice';

import { toggleCompleted } from 'Redux/contactSlice';
import { statusFilters } from 'Redux/constants';

const getVisibleTasks = (task, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return task.filter(task => !task.completed);
    case statusFilters.completed:
      return task.filter(task => task.completed);
    default:
      return task;
  }
};

export const ContactList = ({ task }) => {
  const contacts = useSelector(getTasks);
  //
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task));
  //test
  const handleToggle = () => dispatch(toggleCompleted(task));
  //
  return (
    <div>
      <div>
        {visibleTasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
            />
            <span className={css.contact__list__text}>{task.text} :</span>
            <span className={css.contact__list__text}>{task.number}</span>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </div>

      <ul className={css.contact__list}>
        {contacts.map(task => (
          <li className={css.contact__list__item} key={task.id}>
            <span className={css.contact__list__text}>{task.text} :</span>
            <span className={css.contact__list__text}>{task.number}</span>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
