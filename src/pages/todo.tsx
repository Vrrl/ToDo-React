import { Content } from "../componets/Content";
import { Header } from "../componets/Header";
import { ToDoContextProvider } from "../context/todoContext";


export const ToDoPage = () => {
  return (
    <ToDoContextProvider>
        <Header/>
        <Content/>
    </ToDoContextProvider>
  );
};