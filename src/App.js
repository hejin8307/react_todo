import {useRef, useState} from 'react';
import styles from './app.module.css';
import AddToDo from './components/add_form/addToDo';
import Header from './components/header/header';
import ToDoList from './components/todo_list/toDoList';

function App() {
  const [isChecked, setIsChecked] = useState([
    {
      id: 0,
      isChecked: false,
    },
    {
      id: 1,
      isChecked: false,
    },
  ]);
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

  const nextId = useRef(2);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setToDos([...toDos, {id: nextId.current, name: input}]);
    setIsChecked([...isChecked, {id: nextId.current, isChecked: false}]);
    nextId.current += 1;
  };

  const handleDelete = (toDo) => {
    console.log(toDo);
    setToDos((toDos) => toDos.filter((item) => item.id !== toDo.id));
    setIsChecked((isChecked) =>
      isChecked.filter((item) => item.id !== toDo.id)
    );
    nextId.current -= 1;
  };

  const handleCheck = (checkbox) => {
    setIsChecked([
      ...isChecked,
      {id: Number(checkbox.id), isChecked: checkbox.checked},
    ]);
  };

  const handleActive = (checked) => {
    console.log(checked);
    setToDos(
      toDos.filter((item) => {
        return checked.some((clicked) => clicked.id !== item.id);
      })
    );
  };

  const handleComplete = (checked) => {
    console.log(checked);
    setToDos(
      toDos.filter((item) => {
        return checked.some((clicked) => clicked.id === item.id);
      })
    );
  };

  return (
    <div className={styles.app}>
      <Header
        toDos={toDos}
        isChecked={isChecked}
        onActive={handleActive}
        onComplete={handleComplete}
      />
      <ToDoList toDos={toDos} onCheck={handleCheck} onDelete={handleDelete} />
      <AddToDo toDos={toDos} onInput={handleInput} onAdd={handleAdd} />
    </div>
  );
}

export default App;
