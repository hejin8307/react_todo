import React, {useState} from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import ToDoList from './components/todo_list/toDoList';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <ToDoList filter={filter} />
    </>
  );
}

export default App;
