import * as React from "react";
import { useParams } from "react-router";
import styles from "./oneNews.module.css";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import { fetcOnehNews } from "../../store/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Inews } from "../../models";
import NewsItem from "./newsItem";
import vk from "../../assets/img/social/Vk.svg";
import faceBook from "../../assets/img/social/Facebook.svg";
import viber from "../../assets/img/social/simple-icons_viber.svg";
import telegram from "../../assets/img/social/Telegram.svg";
import whatsapp from "../../assets/img/social/whatsapp.svg";
import { NavLink } from "react-router-dom";
import * as images from "../../assets/img/news";
const OneNews = () => {
  const { id = "all" } = useParams();

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetcOnehNews(id));
  }, [id, dispatch]);
  const currentNews = useAppSelector((state) => state.newsReducer.curentNews);
  const news = useAppSelector((state) => state.newsReducer.news).slice(0, 3);
  const loading = useAppSelector((state) => state.newsReducer.isLoadingOne);
  const linksArr = [{ name: "Новости", link: "/news" }];
  console.log("curr", currentNews.text);
  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.one_news}>
            <div className={styles.content}>
              <Breadcrumbs links={linksArr} />
              <h3 className={styles.title}>{currentNews.title}</h3>
              <div className={styles.row}>
                <div className={styles.date}>{currentNews.date}</div>
                <div className={styles.social}>
                  <div className={styles.subsribe}>Поделиться</div>
                  <NavLink to="/" className={styles.icon}>
                    <img src={vk} alt="vk" />
                  </NavLink>
                  <NavLink to="/" className={styles.icon}>
                    <img src={faceBook} alt="vk" />
                  </NavLink>
                  <NavLink to="/" className={styles.icon}>
                    <img src={viber} alt="vk" />
                  </NavLink>
                  <NavLink to="/" className={styles.icon}>
                    <img src={telegram} alt="vk" />
                  </NavLink>
                  <NavLink to="/" className={styles.icon}>
                    <img src={whatsapp} alt="vk" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <img src={images[currentNews.image as keyof object]} alt="flat" />
          </div>
          <div className={styles.content}>
            {currentNews.text.map((paragraf, index) => (
              <p className={styles.paragraf} key={`par${index}`}>
                {paragraf}
              </p>
            ))}
          </div>
          <div className={styles.read}>
            <h3 className={styles.down_title}>Читайте также</h3>
            <div className={styles.newsgrid}>
              {news.map((newItem, index) => (
                <NewsItem {...newItem} key={newItem._id} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default OneNews;
