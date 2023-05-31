import style from "./index.module.css";

interface AlertProps{
  message: string
}


export const Alert = ({message}: AlertProps) => {
  

  return (
    <div className={style.alert}>
      {message}
    </div>
  );
};
