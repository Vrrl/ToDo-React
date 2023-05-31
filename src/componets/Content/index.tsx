import style from "./index.module.css";
import Plus from "../../assets/plus.svg";
import { NoContent } from "../NoContent";
import { useEffect, useState } from "react";
import { TodoList } from "../TodoList";
import useToDoContext from "../../hooks/todoContext";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../api/api";
import { Alert } from "../Alert";


export const Content = () => {
  
  const { taskListState, setTaskListState } = useToDoContext();
  const [description, setDescription] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);



  const addTaskOnList = () => {
    if (!description)
      return;
    const newTask = {
      id: uuidv4(),
      description,
      isDone: false,
    };

    api
      .post("task", newTask)
      .then(() => {
        setTaskListState((currentValue) => [...currentValue, newTask]);
        setAlert(true)
        setTimeout(() => setAlert(false),2000);
      })
      .finally(() => {
        setDescription("");
      });
  };

  const removeTaskOnDelete = (id: string) => {
    setTaskListState((currentValue) =>
      currentValue.filter((task) => task.id !== id)
    );

    api.delete("task/" + id).then(() => {
      setTaskListState((currentValue) =>
        currentValue.filter((task) => task.id !== id)
      );
    });
  };

  const changeStatusCheckBox = (id: string) => {
    const task = taskListState.find((task) => task.id === id);

    if (task) {
      api.patch("task/"+ task.id, {
        isDone: !task.isDone
      })
    }

    const elements = taskListState.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });

    setTaskListState(elements);
  };

  useEffect(() => {
    api
      .get("task")
      .then((response) => {
        console.log(response)
        return response.data;
      })
      .then((data) => {
        setTaskListState(data);
      });
  }, []);


  return (
    <section className={style.section_container}>
      <main>
        <article className={style.input_container}>
          <input
            className={style.input}
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder="Adicione uma nova tarefa"
          ></input>
          <article>
            <button onClick={addTaskOnList} className={style.button}>
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
            <span className={style.span_value}>{taskListState.filter(task => task.isDone).length}</span>
          </article>
        </article>

        {!taskListState.length ? <NoContent /> : <TodoList list={taskListState} onDelete={removeTaskOnDelete} changeStatusCheckBox={changeStatusCheckBox}/>}
      </main>
      {alert ? <Alert message="Task Criada com sucesso!"/> : ''}
    </section>
  );
};
