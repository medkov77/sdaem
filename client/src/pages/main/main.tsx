import React from "react";
import Tabs from "../../components/common/tabs/tabs";
import styles from "./main.module.css";
import photo1 from "../../assets//img/main/photo1.jpg";
import photo2 from "../../assets//img/main/photo2.jpg";
import photo3 from "../../assets//img/main/photo3.jpg";
import photo4 from "../../assets//img/main/photo4.jpg";
import photo5 from "../../assets//img/main/photo5.jpg";
import flat1 from "../../assets//img/flats/flat1.jpg";
import flat2 from "../../assets//img/flats/flat2.jpg";
import points from "../../assets//img/main/points.svg";
import metroImg from "../../assets//img/main/metro.svg";
import roundArrow from "../../assets//img/main/roundArrow.svg";
import blackArrow from "../../assets//img/main/blackArrow.svg";
import MainButton from "../../components/common/buttons/mainButton";
import Saidbar from "../../components/common/sidebar/saidbar";
import { Isityes } from "../../models";
import { Iflat } from "../../models";
import Select from "../../components/common/form/select/select";
import MainSlider from "../../components/slider/slider";
import btnArrow from "../../assets/img/main/btnArrow.svg";
import mapPoint from "../../assets/img/header/yellowMap.svg";
import whitePoints from "../../assets/img/main/white_points.svg";
import AdvantageCard from "../../components/advantage_card/advantageCard";
import advantage1 from "../../assets/img/main/advantage/Group1.svg";
import advantage2 from "../../assets/img/main/advantage/Group2.svg";
import NewsCol from "../../components/newsCol/newsCol";
const MainPage = () => {
  console.log(typeof (<strong>sdf</strong>));
  const filtredSityes: { name: string; data: string }[] = [
    { name: "Минск", data: "Minsk" },
    { name: "Витебск", data: "Vitebsk" },
    { name: "Гродно", data: "Grodno" },
    { name: "Гомель", data: "Gomel" },
    { name: "Брест", data: "Brest" },
    { name: "Могилев", data: "Mogilev" },
  ];
  const metro: { name: string; value: string }[] = [
    { name: "Минск", value: "Minsk" },
    { name: "Витебск", value: "Vitebsk" },
    { name: "Гродно", value: "Grodno" },
    { name: "Гомель", value: "Gomel" },
    { name: "Брест", value: "Brest" },
    { name: "Могилев", value: "Mogilev" },
  ];
  const sityes: Isityes[] = [
    { name: "Квартиры в Минске", count: 3567 },
    { name: "Квартиры в Гомеле", count: 2032 },
    { name: "Квартиры в Гродно", count: 2302 },
    { name: "Квартиры в Могилеве", count: 110 },
    { name: "Квартиры в Бресте", count: 110 },
    { name: "Квартиры в Витебск", count: 110 },
  ];
  const houses: Isityes[] = [
    { name: "Аггроусадьбы", count: 110 },
    { name: "Коттеджи", count: 110 },
    { name: "Загородный комплекс", count: 110 },
    { name: "Базы отдыха", count: 110 },
  ];
  const directions: Isityes[] = [
    { name: "Коттеджи и усадьбы на о. Брасласких ", count: 110 },
    { name: "Коттеджи и усадьбы (жилье) на Нарочи", count: 110 },
    {
      name: "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере",
      count: 110,
    },
  ];
  const flats: Iflat[] = [
    {
      _id: "001",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat1,
      golg: true,
    },
    {
      _id: "002",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat2,
      golg: true,
    },
    {
      _id: "003",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat2,
      golg: true,
    },
    {
      _id: "004",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat1,
      golg: true,
    },
    {
      _id: "005",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat2,
      golg: true,
    },
    {
      _id: "006",
      price: 65.0,
      people: "4 (2+2)",
      rooms: 4,
      square: 179,
      sity: "Минск",
      adress: "Минск, б-р Мулявина, д. 10",
      metro: "Грушевка",
      department: "Шабаны",
      flatImage: flat2,
      golg: true,
    },
  ];
  const pushButton = (data: string) => {
    console.log(data);
  };
  const handleSelect = (name: string, value: string) => {
    console.log(name, value);
  };
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.main_container}>
          <div className={styles.wrapper}>
            <div className={styles.back}></div>
            <h1 className={styles.title}>
              Sdaem.by - у нас живут{" "}
              <span className={styles.span}>ваши объявления</span>
            </h1>
            <Tabs />
          </div>
          <div className={styles.row}>
            <div className={styles.photo}>
              <div className={styles.big_img}>
                <div className={styles.overlay}></div>
                <div className={styles.img_content}>
                  <div className={styles.img_subtitle}>СНЯТЬ КВАРТИРУ</div>
                  <div className={styles.img_title}>Квартиры на сутки</div>
                  <div className={styles.buttons}>
                    {filtredSityes.map((sity) => (
                      <MainButton
                        key={sity.data}
                        btnData={sity}
                        mainClass="filter_btn"
                        pushButton={pushButton}
                      />
                    ))}
                  </div>
                </div>
                <img src={photo1} alt="flat" />
              </div>
              <div className={styles.small_img}>
                <div className={styles.overlay}></div>
                <div className={styles.img_content}>
                  <div className={styles.img_subtitle}>
                    СНЯТЬ коттедж НА ПРАЗДНИК
                  </div>
                  <div className={styles.img_title}>Коттеджи и усадьбы</div>
                </div>
                <img src={photo2} alt="house" />
                <div className={styles.round_arrow}>
                  <img src={roundArrow} alt="arrow" />
                </div>
              </div>
              <div className={styles.small_img}>
                <div className={styles.overlay}></div>
                <div className={styles.img_content}>
                  <div className={styles.img_subtitle}>
                    ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ
                  </div>
                  <div className={styles.img_title}>Бани и сауны</div>
                </div>
                <img src={photo3} alt="bath" className={styles.small_img} />
                <div className={styles.round_arrow}>
                  <img src={roundArrow} alt="arrow" />
                </div>
              </div>
              <div className={styles.big_img}>
                <div className={styles.overlay}></div>
                <div className={styles.img_content}>
                  <div className={styles.img_subtitle}>
                    еСЛИ СРОЧНО НУЖНА МАШИНА
                  </div>
                  <div className={styles.img_title}>Авто на прокат</div>
                </div>
                <img src={photo4} alt="cars" className={styles.big_img} />
                <div className={styles.round_arrow}>
                  <img src={roundArrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className={styles.saidbar}>
              <Saidbar title="Квартиры" sityes={sityes} />
              <Saidbar title="Коттеджи и усадьбы" sityes={houses} />
              <Saidbar title="Популярные направления" sityes={directions} />
            </div>
          </div>
          <div className={styles.points}>
            <img src={points} alt="points" />
          </div>
          <div className={styles.flats}>
            <div className={styles.flat_title}>КВАРТИРЫ НА СУТКИ</div>
            <div className={styles.flat_subtitle}>Аренда квартир в Минске</div>
            <div className={styles.flat_back}></div>
            <div className={styles.inputs}>
              <Select
                onSelect={handleSelect}
                selectImage={metroImg}
                options={metro}
                name="metro"
                defaultName="Метро"
              />
              <Select
                onSelect={handleSelect}
                options={metro}
                name="department"
                defaultName="Район"
              />
            </div>
            <MainSlider slider={flats} />
            <div className={styles.total}>
              <div className={styles.total_row}>
                <div className={styles.count}>341</div>
                <span className={styles.total_span}>+</span>
                <MainButton
                  btnData={{ name: "Посмотреть все", data: "all" }}
                  mainClass="total_btn"
                  img={btnArrow}
                  imgPos="right"
                  pushButton={pushButton}
                />
              </div>
              <div className={styles.total_text}>Предложений по Минску</div>
            </div>
          </div>
        </div>
      </div>
      <div className="down_wrapper">
        <div className={styles.down_bg}>
          <img src={whitePoints} alt="points" className={styles.white_points} />
          <div className={styles.down_title}>Поиск квартир на карте</div>
          <div className={styles.down_text}>
            Ищите квартиры на сутки в центре города, <br /> возле парка или в
            живописном районе
          </div>
          <MainButton
            btnData={{ name: "Открыть карту", data: "openMap" }}
            mainClass="open_btn"
            img={mapPoint}
            imgPos="left"
            pushButton={pushButton}
          />
        </div>
        <div className="container">
          <div className={styles.advantage}>
            <AdvantageCard
              title="Начните привлекать клиентов бесплатно!"
              image={advantage1}
              cardClass="white"
              text={[
                [
                  "Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно",
                  <strong> бесплатно создавать и публиковать </strong>,
                  "объявления на сайте.",
                ],
              ]}
              btn={{
                btnData: { name: "+  Разместить объявление", data: "add" },
                mainClass: "yellow_btn",
                pushButton,
              }}
            />
            <AdvantageCard
              title="Поднимайте объявления"
              image={advantage2}
              cardClass="white"
              text={[
                [
                  "Вы в любое время можете",
                  <strong> поднимать </strong>,
                  "объявления",
                  <strong> вверх первой страницы </strong>,
                  "каталога,они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.",
                ],
              ]}
              btn={{
                btnData: { name: "Узнать стоимость услуги", data: "price" },
                mainClass: "yellow_btn",
                img: blackArrow,
                imgPos: "right",
                pushButton,
              }}
            />
            <AdvantageCard
              title="Приоритет Gold "
              cardClass="yellow"
              text={[
                [
                  "Приоритетное размещение",
                  <strong> Gold </strong>,
                  "позволяет",
                  <strong> закрепить ваше объявление </strong>,
                  "в верхней части каталога!",
                ],
                [
                  "Gold объявления",
                  <strong> перемещаются каждые 5 мин </strong>,
                  "на 1 позицию, что делает размещение одинаковым для всех.",
                ],
              ]}
              btn={{
                btnData: { name: "Еще о тарифе Gold", data: "gold" },
                mainClass: "total_btn",
                img: btnArrow,
                imgPos: "right",
                pushButton,
              }}
            />
          </div>
          <div className={styles.down_paragraf}>
            <div className={styles.paragraf_points}>
              <img src={points} alt="points" />
            </div>

            <div className={styles.paragraf_wrapper}>
              <div className={styles.paragraf_left}>
                <div className={styles.paragraf_subtitle}>
                  ЧТО ТАКОЕ SDAEM.BY
                </div>
                <div className={styles.paragraf_title}>
                  Квартира на сутки в Минске
                </div>
                <img src={photo5} className={styles.paragraf_img} alt="flat" />
                <img src={points} className={styles.left_points} alt="points" />
                <p>
                  <strong>Нужна квартира на сутки в Минске?</strong>
                  <br /> На веб-сайте sdaem.by вас ждет масса выгодных
                  предложений. Каталог насчитывает{" "}
                  <strong>более 500 квартир.</strong> Благодаря удобной
                  навигации вы быстро найдете подходящий вариант.
                </p>

                <p>
                  В каталоге представлены комфортабельные однокомнатные квартиры
                  на сутки и квартиры с большим количеством комнат в разных
                  районах города, с различной степенью удобства от дешевых до
                  VIP с джакузи.
                </p>
                <p>
                  Чтобы снять квартиру на сутки в Минске, вам достаточно
                  определиться с выбором и связаться с владельцем для уточнения
                  условий аренды и заключить договор. Заметим, на сайте
                  представлены исключительно квартиры на сутки без посредников,
                  что избавляет посетителей от необходимости взаимодействовать с
                  агентствами, тратя свое время и деньги. Также пользователи
                  сайта могут совершенно бесплатно размещать объявления о
                  готовности сдать квартиру на сутки.
                </p>
              </div>
              <NewsCol />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
