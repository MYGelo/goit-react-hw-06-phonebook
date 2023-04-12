import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask } from '../../Redux/tasksSlice';
import css from './contactForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value, form.elements.number.value));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.container}>
        <label>Name</label>
        <input
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // placeholder="Enter name..."
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // placeholder="Enter number..."
        />
        <Button className={css.btn} type="submit">
          Add task
        </Button>
      </form>
    </>
  );
};
