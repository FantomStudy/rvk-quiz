import { Button, Input } from '@shared/ui'
import styles from './Branch.module.css'

const AddBranch = () => {
  return (
    <div className={styles.branch}>
        <h1>Добавление филиала</h1>
        <form className={styles.form}>
            <label htmlFor="branch">Филиал</label>
            <Input id='branch'></Input>
            <Button size='l' color='primary'>Создать</Button>
            <Button size='l' color='danger'>Отменить</Button>
        </form>
    </div>
  )
}

export default AddBranch
