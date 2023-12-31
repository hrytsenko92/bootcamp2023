import { useState, useEffect } from 'react';
import styles from './modal.module.scss';
import { useLocation } from 'react-router-dom';
import { Breeds } from './breeds/Breeds';
import { Voting } from './voting/Voting';
import { Gallery } from './gallery/Gallery';
import { NavModal } from './navBar/navModal/NavModal';
import { Search } from './navBar/search/Search';
import { NavBar } from './navBar/NavBar';
import { BreedID } from './breeds/breedID/BreedID';
import { Loader } from './loader/Loader';

export const Modal: React.FC = () => {
  const location = useLocation();
  const { from } = location.state;

  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(from);
  }, [from]);
  return (
    <div className={styles.container}>
      <NavBar />
      {url === 'voting' ? (
        <Voting />
      ) : from === 'breeds' ? (
        <Breeds />
      ) : from === 'gallery' ? (
        <Gallery />
      ) : from === 'search' ? (
        <Search />
      ) : from === 'likes' ? (
        <NavModal />
      ) : from === 'dislikes' ? (
        <NavModal />
      ) : from === 'favourites' ? (
        <NavModal />
      ) : from === 'breedID' ? (
        <BreedID />
      ) : (
        <Loader />
      )}
    </div>
  );
};
