import { useState } from 'react';
import styles from './modal.module.scss';
import { Link, useLocation } from 'react-router-dom';
// import searchSVG from '../../assets/search.svg';

export const Modal: React.FC = () => {
  const location = useLocation();
  const { from } = location.state;
   const [name, setName] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setName(event.target.value);
   };
console.log(from)
  return (
    <div className={styles.container}>
      <nav className={styles.modalNav}>
        <form className={styles.navForm}>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Search for breeds by name"
            value={name}
            onChange={handleChange}
          />
          <Link
            className={styles.btnSubmit}
            to={'/search'}
            state={{ from: name }}
          ></Link>
        </form>
        <div className={styles.navButtons}>
          <Link
            to={'/likes'}
            className={styles.linkLikes}
            state={{ from: 'occupationLikes' }}
          ></Link>
          <Link
            to={'/favourites'}
            className={styles.linkVavourites}
            state={{ from: 'occupationFavourites' }}
          ></Link>
          <Link
            to={'/dislikes'}
            className={styles.linkDisLikes}
            state={{ from: 'occupationDislikes' }}
          ></Link>
        </div>
      </nav>
    </div>
  );
};
