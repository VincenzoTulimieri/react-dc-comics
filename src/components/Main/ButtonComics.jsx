// importazione dati
import style from './Button.module.css'

export default function Button() {
    return (
        <div className={style.container}>
            <button className={style.btn}><a href="#">load more</a></button>
        </div>
    )
}