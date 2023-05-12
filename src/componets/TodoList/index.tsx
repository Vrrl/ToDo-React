import styles from "./index.module.css";
import Trash from "../../assets/trash.svg";
import { Task } from "../../model/Task";

interface TodoListProps{
  list: Task[]
}

export const TodoList = ({list}: TodoListProps) => {
  return (
    <section>
      {list.map((task) => (
        <article key={task.id} className={styles.content_container}>
          <input 
            type="checkbox"
            id={task.id} 
            defaultChecked={task.isDone} 
          />
          <p className={styles.text}>{task.description}</p>
          <img src={Trash} alt="icone de lixeira" />
        </article>
      ))

      }
      
    </section>
  );
};
