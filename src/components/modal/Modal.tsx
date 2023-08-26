import { useState, useEffect } from 'react';
import styles from './modal.module.scss';
import { useLocation } from 'react-router-dom';
import { Breeds } from './breeds/Breeds';
import { Voting } from './voting/Voting';
import { Gallery } from './gallery/Gallery';
import { Likes } from './likes/Likes';
import { Dislikes } from './dislikes/Dislikes';
import { Favourites } from './favourites/Favourites';
import { Search } from './search/Search';
import { NavBar } from './navBar/NavBar';
import { BreedID } from './breeds/breedID/BreedID';

export const Modal: React.FC = () => {
  const location = useLocation();
  const { from } = location.state;

  const [url, setUrl] = useState()
  useEffect(()=>{
    setUrl(from)
  },[from])
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
        <Likes />
      ) : from === 'dislikes' ? (
        <Dislikes />
      ) : from === 'favourites' ? (
        <Favourites />
      ) : from === 'breedID' ? (
        <BreedID />
      ) : null}
    </div>
  );
};
