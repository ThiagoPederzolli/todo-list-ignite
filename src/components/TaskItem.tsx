import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { ITask } from './ShowList';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: ITask;
  removeTask: (id: string) => void;
  updateCompletedTask: (completedTask: ITask, completed: boolean) => void;
}

export function TaskItem({ task, removeTask, updateCompletedTask }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  function handleToggleCompleTask(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked);
    updateCompletedTask(task, event.target.checked);
  }

  function handleRemoveTask() {
    removeTask(task.id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" onChange={handleToggleCompleTask} />
        <span className={styles.checkmark}></span>
      </label>
        <p className={`${task.isCompleted ? styles.completedTask : styles.incompletedTask}`}>
          {task.text}
        </p>
      </div>
      <button onClick={handleRemoveTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}