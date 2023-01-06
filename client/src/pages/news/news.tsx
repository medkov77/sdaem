import React from "react";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import styles from "./news.module.css";
import image1 from "../../assets/img/news/news3.jpg";
import * as images from "../../assets/img/news";
import NewsItem from "./newsItem";
import MainInput from "../../components/common/form/input/mainInput";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchNews, searchNews } from "../../store/ActionCreators";
import { NavLink } from "react-router-dom";
const News = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const newsData = useAppSelector((state) => state.newsReducer.news);
  const newsSearch = useAppSelector((state) => state.newsReducer.search);
  const searchLoading = useAppSelector(
    (state) => state.newsReducer.searchIsloading
  );
  const linksArr = [{ name: "Новости", link: "/news" }];

  const handleInput = (value: string) => {
    dispatch(searchNews(value));
  };
  return (
    <section className={styles.news}>
      <div className={styles.main_search}>
        <MainInput
          onInput={handleInput}
          name="SearchInput"
          defaultValue="Поиск по статьям"
        />
      </div>
      {!searchLoading && newsSearch.length !== 0 && (
        <ul className={styles.dropdown}>
          {newsSearch.map((news) => (
            <li>
              <NavLink to={`/news/${news._id}`}>{news.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <div className="container">
        <Breadcrumbs links={linksArr} />
        <h2>Новости</h2>
        <div className={styles.newsgrid}>
          {newsData.map((newItem) => (
            <NewsItem {...newItem} key={newItem._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
