import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'Redux/TaskCounter/TaskCounter';

export const AppBar = () => {
  return (
    <header>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
