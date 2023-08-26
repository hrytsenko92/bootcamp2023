import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './breeds.module.scss';
import { Loader } from '../loader/Loader';
import { getData } from '../../../dataLoaders';
import { BreedType } from './breedType';
import { allBreeds, limit } from './breedsCategory';
import { GridTemplate } from '../gridTemplate/GridTemplate';

export const Breeds: FC = () => {
  const [gridItem, setGridItem] = useState<BreedType[]>();
  const [selectedLimit, setSelectedLimit] = useState<number>(20);
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelectChangeBreed = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedBreed(event.target.value);
  };
  const handleSelectChangeLimit = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLimit(Number(event.target.value));
  };
  const getBreeds = async (selectedBreed: string, selectedLimit: number) => {
    let res: BreedType[]
    selectedBreed === 'all'? res = await getData('breeds', selectedLimit): res = await getData(`breeds/${selectedBreed}`, selectedLimit);
    setGridItem(res);
  };
  const sortBreeds = (i: boolean) => {
    if (gridItem && gridItem?.length > 0) {
        const temp = [...gridItem];
        i
          ? setGridItem(temp.sort((a, b) => a.name.localeCompare(b.name)))
          : setGridItem(temp.sort((a, b) => b.name.localeCompare(a.name)));
    }
  }
  useEffect(() => {
    setLoading(true);
    getBreeds(selectedBreed, selectedLimit);
    setLoading(false);
  }, [selectedBreed, selectedLimit]);
  if (loading) {
    return <Loader />;
  } else
    return (
      <section className={style.container}>
        <div className={style.nav}>
          <button
            onClick={() => navigate(-1)}
            className={style.goBackBTN}
          ></button>
          <p className={style.pageName}>
            <span>BREEDS</span>
          </p>
          <select
            className={style.selectBreed}
            onChange={handleSelectChangeBreed}
          >
            <option className={style.selectOption} value="all">
              All breeds
            </option>
            {allBreeds.map(breed => (
              <option
                className={style.selectOption}
                key={breed.id}
                value={breed.id}
              >
                {breed.name}
              </option>
            ))}
          </select>
          <select
            className={style.selectLimit}
            onChange={handleSelectChangeLimit}
          >
            <option className={style.selectOption} value="20">
              Limit: 20
            </option>
            {limit.map(item => (
              <option
                className={style.selectOption}
                key={item.numLimit}
                value={item.numLimit}
              >
                {item.title}
              </option>
            ))}
          </select>
          <button
            className={style.sortBA}
            onClick={() => sortBreeds(true)}
          ></button>
          <button
            className={style.sortAB}
            onClick={() => sortBreeds(false)}
          ></button>
        </div>
        <GridTemplate gridItem={gridItem} />
      </section>
    );
};
