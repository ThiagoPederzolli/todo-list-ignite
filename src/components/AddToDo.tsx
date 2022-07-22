import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import styles from './AddToDo.module.css';
import { ITask } from './ShowList';

interface AddToDoProps {
  addNewTask: (task: ITask) => void;
}

export function AddToDo({ addNewTask}: AddToDoProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask() {
    addNewTask({
      id: uuidv4(),
      text: newTask,
      isCompleted: false,
    })
    setNewTask('');
  }

  function handleInputNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputNewTask}
        value={newTask}
      />
      <button onClick={handleAddNewTask}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  )
}