import { TaskForm } from './contactForm/contactForm';
import { TaskList } from './contactList/contactList';
import { StatusFilter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <TaskForm />
        <h2>Contacts</h2>
        <StatusFilter />
        <TaskList />
      </div>
    </>
  );
};
