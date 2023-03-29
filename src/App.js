import React, {useState} from 'react';
import Header from './components/header/header';
import ToDoList from './components/todo_list/toDoList';
import {DarkModeProvider} from './context/darkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <ToDoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
