import {useState} from 'react';
import styles from './App.module.css';
import {FaTrashAlt} from 'react-icons/fa';

function App() {
  const [input, setInput] = useState('');
  const [titles, setTitles] = useState([
    {
      name: '강의보기',
    },
    {
      name: '카페가기',
    },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setTitles([...titles, {name: input}]);
    console.log(titles);
  };

  return (
    <div className={styles.app}>
      <section className={styles.content}>
        {titles.map((title, index) => (
          <div className={styles.toDoList}>
            <input type="checkbox" />
            <li className={styles.title} key={index}>
              {title.name}
            </li>
            <button className={styles.btn}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
        <form className={styles.addToDo} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={titles.name}
            placeholder="Add Todo"
            onChange={handleChange}
          />
          <button className={styles.addBtn} onSubmit={handleSubmit}>
            Add
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
