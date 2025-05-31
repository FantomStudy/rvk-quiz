import { Button, Input } from '@shared/ui'
import styles from './Branch.module.css'

const ChangeBranch = () => {
  return (
    <div className={styles.branch}>
        <h1>Изменение филиала</h1>
        <form className={styles.form}>
            <label htmlFor="branch">Филиал</label>
            <Input id='branch'></Input>
            <Button size='l' color='primary'>Изменить</Button>
            <Button size='l' color='danger'>Удалить</Button>
        </form>
    </div>
  )
}

export default ChangeBranch
