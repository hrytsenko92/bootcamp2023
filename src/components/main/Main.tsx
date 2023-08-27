// import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from './main.module.scss';
import logo from '../../assets/Logo.svg';
// import daySVG from '../../assets/day.svg';
// import nightSVG from '../../assets/night.svg';
import votingSVG from '../../assets/votingSVG.svg';
import breedsSVG from '../../assets/breedsSVG.svg';
import gallerySVG from '../../assets/gallerySVG.svg';

export const Main: React.FC = () => {
    // const [theme, setTheme] = useState<boolean>(true)
    // const handleChange = () => {
    //   setTheme(!theme);
    // };
    return (
      <div className={style.container}>
        <section className={style.stickyWrapper}>
          <div className={style.firstLine}>
            <Link className={style.link} to={'/'}>
              <img src={logo} alt="Logotype" className={style.macPawLogo} />
            </Link>
            {/* <div className={style.themeSwitcher}>
              {theme ? (
                <img className={style.logo} src={daySVG} alt="daySVG" />
              ) : (
                <img className={style.logo} src={nightSVG} alt="nightSVG" />
              )}
              <input
                type="checkbox"
                checked={theme}
                onChange={handleChange}
                id="switch"
              />
              <label htmlFor="switch">Toggle</label>
            </div> */}
          </div>
          <div className={style.secondLine}>
            <span className={style.greetings}>Hi!👋</span>
            <span className={style.welcome}>
              Welcome to MacPaw Bootcamp 2023
            </span>
          </div>
          <div className={style.thirdLine}>
            <span className={style.navTitle}>Lets start using The Cat API</span>
            <nav className={style.navigation}>
              <div className={style.linkWrapper}>
                <img
                  className={style.linkSVG}
                  src={votingSVG}
                  alt="votingsvg"
                />
                <Link
                  className={style.link}
                  to={'/voting'}
                  state={{ from: 'voting' }}
                >
                  Voting
                </Link>
              </div>
              <div className={style.linkWrapper}>
                <img
                  className={style.linkSVG}
                  src={breedsSVG}
                  alt="breedssvg"
                />
                <Link
                  className={style.link}
                  to={'/breeds'}
                  state={{ from: 'breeds' }}
                >
                  Breeds
                </Link>
              </div>
              <div className={style.linkWrapper}>
                <img
                  className={style.linkSVG}
                  src={gallerySVG}
                  alt="gallerysvg"
                />
                <Link
                  className={style.link}
                  to={'/gallery'}
                  state={{ from: 'gallery' }}
                >
                  Gallery
                </Link>
              </div>
            </nav>
          </div>
        </section>
        <section className={style.outlet}>
          <Outlet />
        </section>
      </div>
    );
}