import {NewsItem} from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";

const initNews = [
  {
    title: 'Первая новость',
    url: 'www.example.com',
    username: 'Пользователь 1',
    date: '01-01-2022',
    score: 23,
    id: '1'
  },
  {
    title: 'Вторя новость',
    url: 'www.example.com',
    username: 'Пользователь 2',
    date: '23-02-2022',
    score: 45,
    id: '2'
  },
  {
    title: 'Третья новость',
    url: 'www.example.com',
    username: 'Пользователь 3',
    date: '08-03-2022',
    score: 75,
    id: '3'
  }
]

const newNews = {
  title: 'Четвертая новость',
  url: 'www.example.com',
  username: 'Пользователь 4',
  date: '09-05-2022',
  score: 150,
  id: '4'
}

function App() {
  const checkStorage = () => JSON.parse(window.localStorage.getItem('newsKey')) || initNews
  const [news, setNews] = useState(checkStorage)

  useEffect(() => {
    window.localStorage.setItem('newsKey', JSON.stringify(news))
  }, [news])

  const newsCountHandler = () => {
    setNews((prevState) => [...prevState, newNews])
  }

  return (
    <>
      <div>Количество новостей: {news.length}</div>
      <button onClick={newsCountHandler}>Добавить новость</button>
      {
        news.map(item => {
          return (
              <NewsItem
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  username={item.username}
                  date={item.date}
                  score={item.score}
              />
          )
        })
      }
    </>
  );
}

export default App;
