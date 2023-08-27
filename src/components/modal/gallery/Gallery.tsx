import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './gallery.module.scss';
import { order, imgFormat, GalleryIMGType } from './galleryTypes';
import { allBreeds, limit } from '../breeds/breedType';
import { getData, postData } from '../../../dataLoaders';
import { useAppDispatch } from '../../../../store/hook';
import { add } from '../../../../store/logSlice';
// import { Portal } from './portal/Portal';

export const Gallery: FC = () => {
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  const [data, setData] = useState<GalleryIMGType[]>();
  const [selectedOrder, setSelectedOrder] = useState<string>('RANDOM');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedBreed, setSelectedBreed] = useState<string>('all');
  const [selectedLimit, setSelectedLimit] = useState<string>('20');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSelectChangeOrder = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedOrder(event.target.value);
  };
  const handleSelectChangeFormat = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedFormat(event.target.value);
  };
  const handleSelectChangeBreed = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedBreed(event.target.value);
  };
  const handleSelectChangeLimit = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLimit(event.target.value);
  };
  const updateLogSlice = (category: string, changes: string, catId: string) => {
    if (catId) {
      dispatch(
        add({
          image_id: catId,
          time: Date.now(),
          category,
          changes,
        }),
      );
    }
  };
  const addFavourite = async (catId: string) => {
    if (catId) {
      const res = await postData('favourites', {
        image_id: catId,
        sub_id: import.meta.env.MySubID,
      });
      if (res.message === 'SUCCESS') {
        updateLogSlice('Favourites', 'added', catId);
      }
    }
  };
  const getIMG = async (
    selectedOrder: string,
    selectedFormat: string,
    selectedBreed: string,
    selectedLimit: string,
  ) => {
    const order = selectedOrder;
    const mimeTypes = selectedFormat !== 'all' ? selectedFormat : '';
    const breedIds = selectedBreed !== 'all' ? selectedBreed : '';
    const limit = selectedLimit;
    const res: GalleryIMGType[] = await getData(`images/search`, {
      order,
      mime_types: mimeTypes,
      breed_ids: breedIds,
      limit,
    });
    setData(res);
  };

  useEffect(() => {
    getIMG(selectedOrder, selectedFormat, selectedBreed, selectedLimit);
  }, [selectedOrder, selectedFormat, selectedBreed, selectedLimit]);
  return (
    <section className={style.container}>
      <div className={style.nav}>
        <span className={style.btnWraper}>
          <button
            onClick={() => navigate(-1)}
            className={style.goBackBTN}
          ></button>
          <p className={style.pageName}>
            <span>GALLERY</span>
          </p>
        </span>
        <button className={style.uploadIMG}></button>
        {/* <Portal isOpen={modalOpen} onClose={closeModal}>
          <h2> Modal</h2>
        </Portal> */}
      </div>
      <div className={style.optionWrapper}>
        <div className={style.selectOrderWrapper}>
          <span>ORDER</span>
          <select
            className={style.selectOrder}
            onChange={handleSelectChangeOrder}
          >
            <option className={style.selectOption} value="RANDOM">
              Random
            </option>
            {order.map(item => (
              <option
                className={style.selectOption}
                key={item.orderValue}
                value={item.orderValue}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className={style.selectFormatWrapper}>
          <span>TYPE</span>
          <select
            className={style.selectFormat}
            onChange={handleSelectChangeFormat}
          >
            <option className={style.selectOption} value="all">
              All
            </option>
            {imgFormat.map(item => (
              <option
                className={style.selectOption}
                key={item.formatValue}
                value={item.formatValue}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className={style.selectBreedWrapper}>
          <span>BREED</span>
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
        </div>
        <div className={style.selectLimitWrapper}>
          <span>LIMIT</span>
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
            className={style.update}
            onClick={() =>
              getIMG(
                selectedOrder,
                selectedFormat,
                selectedBreed,
                selectedLimit,
              )
            }
          ></button>
        </div>
      </div>
      <section className={style.gridContainer}>
        {data !== undefined
          ? data.map((item, index) => (
              <div className={style[`div${index}`]} key={item.id}>
                <section className={style.imgContainer}>
                  <div className={style.btnFavouriteWrapper}>
                    <button
                      className={style.btn}
                      onClick={() => addFavourite(item.id)}
                    ></button>
                  </div>
                  <div className={style.filterBlock}></div>
                  {item ? (
                    <img
                      className={style.templateItemIMG}
                      src={item.url}
                      alt=""
                    />
                  ) : null}
                </section>
              </div>
            ))
          : null}
      </section>
    </section>
  );
};
