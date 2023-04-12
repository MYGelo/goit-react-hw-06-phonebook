import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../Redux/selectors';
import css from './contactList.module.css';
import { deleteTask } from 'Redux/contactSlice';

export const ContactList = ({ task }) => {
  const contacts = useSelector(getTasks);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task));

  return (
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
  );
};
