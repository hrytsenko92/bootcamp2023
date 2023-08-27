import { FC } from 'react';
import style from './gridTemplate.module.scss';
import { BreedType } from '../breeds/breedType';
import { TemplateItem } from './templateitem/TemplateItem';

type propType = {
  gridItem?: BreedType[];
};
export const GridTemplate: FC<propType> = ({ gridItem }) => {
  return (
    <>
      {Array.isArray(gridItem) ? (
        <section className={style.gridContainer}>
          {gridItem.map((item, index) => (
            <div className={style[`div${index}`]} key={item.id}>
              <TemplateItem item={item} />
            </div>
          ))}
        </section>
      ) : (
        <section className={style.gridContainer}>
          <div className={style[`div0`]} key={0}>
            <TemplateItem item={gridItem} />
          </div>
        </section>
      )}
    </>
  );
};
