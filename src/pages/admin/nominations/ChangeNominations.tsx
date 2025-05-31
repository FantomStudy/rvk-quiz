import { Button, Input } from '@shared/ui';
import styles from './Nominations.module.css';


const ChangeNominations = () => {
  return (
    <div className={styles.add}>
    <h1>Изменение номинации</h1>
    <form className={styles.form}>
        <label htmlFor="name">Название</label>

        <Input id='name'/>
        <label htmlFor='count'>Количество вопросов в тесте</label>
        <Input id='count'/> 

        <Button color='primary' size='l'>Создать</Button>
        <Button color='danger' size='l'>Удалить</Button>
    </form>
</div>
  )
}

export default ChangeNominations