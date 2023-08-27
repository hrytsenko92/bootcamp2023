import { FC, useEffect, useState } from 'react';
import style from './search.module.scss';
import { getData } from '../../../../dataLoaders';
import { useLocation, useNavigate } from 'react-router-dom';
import { BreedType, allBreeds } from '../../breeds/breedType';
import { GridTemplate } from '../../gridTemplate/GridTemplate';

export const Search: FC = () => {
  const [data, setData] = useState<BreedType[]>();
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const findBreed = async (name: string) => {
    if (allBreeds.find(breed => breed.name === name)) {
      const temp = allBreeds.find(breed => breed.name === name);
      const res: BreedType[] = await getData(`breeds/${temp?.id}`, {
        limit: 1,
      });
      setData(res);
    }
  };

  useEffect(() => {
    findBreed(name);
  }, [name]);

  return (
    <section className={style.container}>
      <div className={style.nav}>
        <button
          onClick={() => navigate(-1)}
          className={style.goBackBTN}
        ></button>
        <p className={style.pageName}>
          <span>SEARCH</span>
        </p>
      </div>
      <div className={style.searchTitle}>
        <span>Search results for:</span>
        <span>{` ${name}`}</span>
      </div>
      <GridTemplate gridItem={data} />
    </section>
  );
};
