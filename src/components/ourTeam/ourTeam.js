import s from './ourTeam.module.css';
import { images } from './images';
import sprite from './img/sptire.svg';
import BackToMain from '../balanceWrapper/backToMain/backToMain';

const OurTeam = () => (
  <div className={s.container}>
    <BackToMain />
    <h2 className={s.title}>The Hateful Nine</h2>
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.pasha} alt="pasha" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Павел Ивченко</h3>
          <p className={s.description}>Team leader , backend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/Chivapchichi2"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/pasha-ivchenko/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.ivan} alt="ivan" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Иван Филипчик</h3>
          <p className={s.description}>Scrum Master, backend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/f957-cua"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/ivan-filipchyk/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.vladyslav} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Владислав Сафин</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/Lemout17?tab=repositories"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/vladyslav-safin-338491214/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.ruslan} alt="ruslan" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Руслан Головач</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/RuslanGolovach"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/ruslan-golovach-40313a21a/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.vitaliy} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Виталий Спильнык</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/KalVasFlame"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/vitaliy-spilnyk-126705204/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.evgen} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Евгений Евтушенко</h3>
          <p className={s.description}>Backend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/Yevtushenko7"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/yevhen-yevtushenko7/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.kristina} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Кристина Ермак</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/KristinaY-87"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/kristina-yermak-44a565208/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.lora} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Лора Загоржевская</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.google.com/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.google.com/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.imgBox}>
          <img className={s.img} src={images.vova} alt="vova" />
        </div>
        <div className={s.wrapper}>
          <h3 className={s.nameTitle}>Владимир Варийчук</h3>
          <p className={s.description}>Frontend developer</p>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://github.com/VVariychuk"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-github`} />
                </svg>
              </a>
            </li>
            <li className={s.socialItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/vvariychuk/"
              >
                <svg className={s.icons}>
                  <use xlinkHref={`${sprite}#icon-linkedin`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

export default OurTeam;
