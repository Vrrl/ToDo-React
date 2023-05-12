import style from "./index.module.css";
import Plus from "../../assets/plus.svg";
import { NoContent } from "../NoContent";
import { useState } from "react";
import { TodoList } from "../TodoList";
import { Task } from "../../model/Task";
export const Content = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum interdum imperdiet.",
      isDone: false,
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum interdum imperdiet.",
      isDone: false,
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum interdum imperdiet.",
      isDone: true,
    },
  ]);

  return (
    <section className={style.section_container}>
      <main>
        <article className={style.input_container}>
          <input
            className={style.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
          ></input>
          <article>
            <button className={style.button}>
              Criar
              <img src={Plus} alt="Logo de mais"></img>
            </button>
          </article>
        </article>
        <article className={style.content_header}>
          <article className={style.tasks_container}>
            <p className={style.task_created}>Tarefas Criadas</p>
            <span className={style.span_value}>0</span>
          </article>
          <article className={style.tasks_container}>
            <p className={style.tasks_done}>Concluidas</p>
            <span className={style.span_value}>0</span>
          </article>
        </article>

        {!taskList.length ? <NoContent /> : <TodoList list={taskList/>}
      </main>
    </section>
  );
};
