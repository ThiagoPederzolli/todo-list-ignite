import { useState } from 'react';
import { AddToDo } from './AddToDo';
import { Empty } from './Empty';
import styles from './ShowList.module.css';
import { TaskItem } from './TaskItem';

export interface ITask {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function ShowList() {
  const [tasks, setTasks] = useState<ITask[]>();
  const completedTasks = tasks?.filter(task => task.isCompleted)
  function addNewTask(task: ITask): void {
    if (!!tasks && tasks?.length > 0) {
      setTasks([...tasks, task]);
      return;
    }
    setTasks([task])
  }

  function removeTask(id: string) {
    const tasksWithoutRemovedOne = tasks?.filter(task => task.id !== id);
    if (!!tasksWithoutRemovedOne) {
      setTasks([...tasksWithoutRemovedOne]);
    }
  }

  function updateCompletedTask(completedTask: ITask, completed: boolean) {
    const filteredTasks = tasks?.filter(task => task.id !== completedTask.id);

    if (!!filteredTasks && !!tasks) {
      setTasks([...filteredTasks, {...completedTask, isCompleted: completed}].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)));
    }

  }
  return (
    <div>
      <AddToDo addNewTask={addNewTask} />
      <div className={styles.wrapper}>
        <div className={styles.taskCounts}>
          <p>Tarefas ciadas <span>{!!tasks ? tasks.length : '0'}</span></p>
          <p>Concluídas <span>{!!completedTasks ? completedTasks?.length : '0'}</span></p>
        </div>
        {(!tasks || tasks?.length === 0) && <Empty />}
        {!!tasks && (
          <div className={styles.tasksContainer}>
            {tasks.map(task => <TaskItem updateCompletedTask={updateCompletedTask} key={task.id} task={task} removeTask={removeTask} />)}
          </div>
        )}

      </div>
    </div>
  )
}