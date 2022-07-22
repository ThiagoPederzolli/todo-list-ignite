import { ClipboardText } from 'phosphor-react';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textAndIcon}>
        <ClipboardText size={56} />
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}