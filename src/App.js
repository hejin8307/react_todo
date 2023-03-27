import {useEffect, useRef, useState} from 'react';
import styles from './app.module.css';
import AddToDo from './components/add_form/addToDo';
import Header from './components/header/header';
import ToDoList from './components/todo_list/toDoList';

function App() {
  const [isChecked, setIsChecked] = useState([
    {
      id: Number,
      isChecked: Boolean,
    },
  ]);
  const [input, setInput] = useState('');
  const [toDos, setToDos] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('toDos');
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });

  useEffect(() => {
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setToDos([...toDos, {id: Date.now(), name: input, isChecked: false}]);
    // setIsChecked([...isChecked, {id: nextId.current, isChecked: false}]);
    // setIsChecked([
    //   ...isChecked,
    //   {id: toDos[toDos.length - 1].id, isChecked: false},
    // ]);
    // console.log(isChecked);
    localStorage.setItem('toDos', JSON.stringify(toDos));
  };

  const handleDelete = (toDo) => {
    setToDos((toDos) => toDos.filter((item) => item.id !== toDo.id));
    localStorage.setItem('toDos', JSON.stringify(toDos));
    // setIsChecked((isChecked) =>
    //   isChecked.filter((item) => item.id !== toDo.id)
    // );
  };

  const handleCheck = (checkbox) => {
    console.log(checkbox);
    // setIsChecked([
    //   ...isChecked,
    //   {id: Number(checkbox.id), isChecked: checkbox.checked},
    // ]);

    // checkbox.id -> string / toDo.id -> number
    const clickedObj = toDos.filter((toDo) => {
      if (toDo.id == checkbox.id) {
        return toDo;
      }
    });
    const clicked = clickedObj.map((item) => item.isChecked);
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id == checkbox.id) {
          return {...toDo, isChecked: !clicked[0]};
        }
        return toDo;
      })
    );
    // console.log(toDos);
    localStorage.setItem('toDos', JSON.stringify(toDos));
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
