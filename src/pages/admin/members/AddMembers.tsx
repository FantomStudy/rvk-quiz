import { Button, Input } from '@shared/ui'
import styles from './Members.module.css'

const AddMembers = () => {
  return (
    <div className={styles.members}>
        <h1>Добавление участника</h1>
        <form className={styles.form}>
            <label htmlFor="number">Номер</label>
            <Input id='number'></Input>
            <Button size='l' color='primary'>Создать</Button>
            <Button size='l' color='danger'>Отменить</Button>
        </form>
    </div>
  )
}

export default AddMembers