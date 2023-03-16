import {useRef, useState} from 'react';
import styles from './app.module.css';
import AddToDo from './components/add_form/addToDo';
import ToDoList from './components/todo_list/toDoList';

function App() {
  const [input, setInput] = useState('');
  const [toDos, setToDos] = useState([
    {
      id: 0,
      name: '강의보기',
    },
    {
      id: 1,
      name: '카페가기',
    },
  ]);

  const nextId = useRef(1);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setToDos([...toDos, {id: nextId.current + 1, name: input}]);
  };

  const handleDelete = (toDo) => {
    setToDos((toDos) => toDos.filter((item) => item.id !== toDo.id));
  };

  return (
    <div className={styles.app}>
      <ToDoList toDos={toDos} onDelete={handleDelete} />
      <AddToDo toDos={toDos} onInput={handleInput} onAdd={handleAdd} />
    </div>
  );
}

export default App;
