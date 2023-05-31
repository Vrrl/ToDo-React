import styles from './index.module.css'
import { useNavigate } from "react-router-dom"
import preview from "../public/preview.svg"

export const App = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.main}>
            <div className={styles.subDiv} onClick={() => navigate('/to-do')}>
                <p className={styles.text}>ToDo List</p>
                <img src={preview} className={styles.image}/>
            </div>
        </div>
    )
}