import {useState, useEffect} from 'react';
import AddToDo from '../add_form/addToDo';
import ToDo from '../todo/toDo';
import styles from './toDoList.module.css';

const ToDoList = ({filter}) => {
  const [toDos, setToDos] = useState(() => readToDosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const handleAdd = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  const handleDelete = (toDo) => {
    setToDos((toDos) => toDos.filter((item) => item.id !== toDo.id));
  };

  const handleUpdate = (check) => {
    setToDos(toDos.map((toDo) => (toDo.id === check.id ? check : toDo)));
  };

  const filtered = getFilteredToDos(toDos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.toDoList}>
        {filtered.length > 0 ? (
          filtered.map((toDo) => (
            <ToDo
              key={toDo.id}
              toDo={toDo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className={styles.message}>Please add a todo</div>
        )}
      </ul>
      <AddToDo toDos={toDos} onAdd={handleAdd} />
    </section>
  );
};

export default ToDoList;

function readToDosFromLocalStorage() {
  const toDos = localStorage.getItem('toDos');
  return toDos ? JSON.parse(toDos) : [];
}

function getFilteredToDos(toDos, filter) {
  if (filter === 'all') {
    return toDos;
  }
  return toDos.filter((toDo) => toDo.status === filter);
}
