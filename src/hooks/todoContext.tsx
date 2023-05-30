import { useContext } from "react";
import ToDoContext, { ToDoContextProps } from "../context/todoContext";

const useToDoContext = () => {
    const todoContext = useContext<ToDoContextProps>(ToDoContext)

    return todoContext;
}

export default useToDoContext