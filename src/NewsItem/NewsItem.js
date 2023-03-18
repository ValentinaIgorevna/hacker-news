import style from './NewsItem.module.css'
import {unixToDate} from "../utils/utils";

export function NewsItem(props) {
    const scoreClassArray = [style.score]

    if (props.score > 250) {
        scoreClassArray.push(style.highScore)
    } else if (props.score > 100) {
        scoreClassArray.push(style.midScore)
    } else {
        scoreClassArray.push(style.lowScore)
    }

    return(
        <div className={style.container}>
            <a className={style.link} href="example.com">{props.title}</a>

            <div className={style.info}>
                <div className={style.userData}>
                    <span>{props.username} | </span>
                    <span>{unixToDate(props.date)}</span>
                </div>

                <div className={scoreClassArray.join(' ')}>
                    {props.score} points
                </div>
            </div>
        </div>
    )
}