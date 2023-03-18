import style from './NewsItem.module.css'
import {domainToHostname, openExternalUrl, unixToDate} from "../../utils/utils";
import {Link} from "react-router-dom";

export function NewsItem(props) {
    const {className = '', title, username, date, score, url} = props
    const scoreClassArray = [style.score]

    if (props.score > 100) {
        scoreClassArray.push(style.highScore)
    } else if (props.score > 50) {
        scoreClassArray.push(style.midScore)
    } else {
        scoreClassArray.push(style.lowScore)
    }

    return(
        <div className={`${style.container} ${className}`}>
            <Link className={style.link}  to={`comments/${props.id}`}>{title}</Link>
            {/*<a className={style.link} href="example.com">{title}</a>*/}

            <div className={style.info}>
                <div className={style.userData}>
                    <span>{username} | </span>
                    <span>{unixToDate(date)}</span>
                </div>

                {url ? (
                    <div className={style.externalLink} onClick={() => openExternalUrl(url)}>{domainToHostname(url)}</div>
                ) : (
                    <div className={scoreClassArray.join(' ')}>
                        {score} points
                    </div>
                )}
            </div>
        </div>
    )
}