import {useEffect, useRef, useState} from 'react';
import styles from './app.module.css';
import ActivateList from './components/active_list/activeList';
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
  // const [toDos, setToDos] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    console.log(toDos);
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  useEffect(
    (checked) => {
      setFilters(checked);
      console.log(filters);
    },
    [filters]
  );

  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  const handleAdd = (newToDo) => {
    console.log(newToDo);
    // e.preventDefault();
    setToDos([...toDos, {id: Date.now(), name: newToDo, isChecked: false}]);
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
    // localStorage.setItem('toDos', JSON.stringify(toDos));
  };

  const handleFilters = (checked) => {
    // console.log(checked);
    setFilters(checked);
  };

  return (
    <div className={styles.app}>
      <Header toDos={toDos} onFilters={handleFilters} />
      <ToDoList
        toDos={toDos}
        filters={filters}
        onCheck={handleCheck}
        onDelete={handleDelete}
        onFilters={handleFilters}
      />
      {/* <ActivateList
        filters={filters}
        onCheck={handleCheck}
        onDelete={handleDelete}
        onFilters={handleFilters}
      /> */}
      <AddToDo toDos={toDos} onAdd={handleAdd} />
    </div>
  );
}

export default App;
