import { FC } from 'react';
import style from './gallery.module.scss';

export const Gallery: FC = () => {
  return <section className={style.container}>gallery</section>;
};


// import { FC } from 'react';
// import style from './templateItem.module.scss';
// import { BreedType } from '../../breeds/breedType';
// import { postData } from '../../../../dataLoaders';
// import { useAppDispatch } from '../../../../../store/hook';
// import { add } from '../../../../../store/logSlice';
// import favouriteSVG from '../../../../assets/favoriteD.svg';

// type propType = {
//   item?: BreedType;
// };

// export const TemplateItem: FC<propType> = ({ item }) => {
//   const dispatch = useAppDispatch();
//   const addFavourite = async () => {
//     if (item?.id) {
//       const res = await postData('favourites', {
//         image_id: item.id,
//         sub_id: import.meta.env.MySubID,
//       });
//       if (res.message === 'SUCCESS') {
//         updateLogSlice('Favourites', 'added');
//       }
//     }
//   };
//   const updateLogSlice = (category: string, changes: string) => {
//     if (item?.id) {
//       dispatch(
//         add({
//           image_id: item?.id,
//           time: Date.now(),
//           category,
//           changes,
//         }),
//       );
//     }
//   };
//   return (
//     <section className={style.container}>
//       <div className={style.btnFavouriteWrapper}>
//         <button onClick={() => addFavourite()} className={style.btnFavourite}>
//           <img src={favouriteSVG} alt="favouriteSVG" />
//         </button>
//       </div>

//       {item ? (
//         <img
//           className={style.templateItemIMG}
//           src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
//           alt=""
//         />
//       ) : null}
//     </section>
//   );
// };
