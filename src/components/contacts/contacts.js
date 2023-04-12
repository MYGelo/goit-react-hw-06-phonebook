import { useDispatch } from 'react-redux';
import { deleteTask } from 'Redux/tasksSlice';
// import { MdClose } from 'react-icons/md';
import css from './contacts.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  return (
    <>
      <span className={css.contact__list__text}>{task.text} :</span>
      <span className={css.contact__list__text}>{task.number}</span>
      <button type="button" onClick={handleDelete}>
        {/* <MdClose size={24} /> */}
        Delete
      </button>
    </>
  );
};
