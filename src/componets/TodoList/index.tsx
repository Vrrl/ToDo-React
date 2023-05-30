import styles from "./index.module.css";
import Trash from "../../assets/trash.svg";
import { Task } from "../../model/Task";

interface TodoListProps{
  list: Task[]
  onDelete: (id: string) => void
  changeStatusCheckBox: (id: string) => void
}

export const TodoList = ({list, onDelete, changeStatusCheckBox}: TodoListProps) => {
  return (
    <section>
      {list.map((task) => (
        <article key={task.id} className={styles.content_container}>
          <input 
            type="checkbox"
            id={task.id} 
            defaultChecked={task.isDone} 
            onChange={() => changeStatusCheckBox(task.id)}
          />
          <p className={task.isDone ? styles.text_scratched : styles.text}>{task.description}</p>
          <img src={Trash} className={styles.trash} alt="icone de lixeira" onClick={() => onDelete(task.id)} />
        </article>
      ))

      }
      
    </section>
  );
};
