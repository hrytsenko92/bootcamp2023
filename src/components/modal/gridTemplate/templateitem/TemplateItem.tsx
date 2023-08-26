import { FC } from 'react';
import style from './templateItem.module.scss';
import { BreedType } from '../../breeds/breedType';
import { Link } from 'react-router-dom';

type propType = {
  item?: BreedType;
};

export const TemplateItem: FC<propType> = ({ item }) => {

  return (
    <section className={style.container}>
      <div className={style.btnFavouriteWrapper}>
        <Link
          to={`/breeds/${item?.id}`}
          className={style.link}
          state={{ from: 'breedID', item }} // data for itemID component
        >
          {item?.name}
        </Link>
      </div>
      <div className={style.filterBlock}></div>
      {item ? (
        <img
          className={style.templateItemIMG}
          src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
          alt=""
        />
      ) : null}
    </section>
  );
};
