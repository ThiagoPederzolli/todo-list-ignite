import styles from './Header.module.css';
import ToDoListLogo from '../assets/todo_list_logo.svg';

export function Header() {
  return (
    <header  className={styles.header}>
      <img src={ToDoListLogo} alt="ToDoList logo" />
    </header>
  )
}