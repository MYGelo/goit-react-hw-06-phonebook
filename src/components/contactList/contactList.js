import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter, getTasks } from '../../Redux/selectors';
import css from './contactList.module.css';
import { deleteTask } from 'Redux/contactSlice';

export const ContactList = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task));

  const contacts = useSelector(getTasks);
  const filter = useSelector(getStatusFilter).toLowerCase();

  const normalizedContacts = contacts.filter(task =>
    task.text.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul className={css.contact__list}>
        {normalizedContacts.map((contact, id) => (
          <li key={id} className={css.contact__list__item}>
            <span>{contact.text} : </span>
            <span>{contact.number} </span>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
