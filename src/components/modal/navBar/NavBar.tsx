import { FC, useState } from 'react';
import style from './navbar.module.scss';
import { Link } from 'react-router-dom';

export const NavBar: FC = () => {
  const [name, setName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <section className={style.container}>
      <nav className={style.modalNav}>
        <form className={style.navForm}>
          <input
            className={style.inputText}
            type="text"
            placeholder="Search for breeds by name"
            value={name}
            onChange={handleChange}
          />
          <Link
            className={style.btnSubmit}
            to={'/search'}
            state={{ from: 'search', name }}
          ></Link>
        </form>
        <div className={style.navButtons}>
          <Link
            to={'/likes'}
            className={style.linkLikes}
            state={{ from: 'likes' }}
          ></Link>
          <Link
            to={'/favourites'}
            className={style.linkVavourites}
            state={{ from: 'favourites' }}
          ></Link>
          <Link
            to={'/dislikes'}
            className={style.linkDisLikes}
            state={{ from: 'dislikes' }}
          ></Link>
        </div>
      </nav>
    </section>
  );
};
