import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getData } from '../../../../dataLoaders';
import style from './breedid.module.scss';
import { BreedType } from '../breedType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { VotingType } from '../../voting/votingType';
import 'swiper/css';
import 'swiper/css/pagination';

export const BreedID: FC = () => {
  const [data, setData] = useState<BreedType>();
  const [dataIMG, setDataIMG] = useState<VotingType[]>();
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();
  const getIMG = async () => {
    if (item) {
      const res: VotingType[] = await getData(
        `images/search?breed_ids=${item.id}`,
        { limit: 5 },
      );
      setDataIMG(res);
    }
  };
  useEffect(() => {
    setData(item);
    getIMG();
  }, [item]);
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
        <p className={style.pageName}>
          <span>{item.name}</span>
        </p>
      </div>
      {dataIMG ? (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
        >
          <SwiperSlide>
            <img
              className={style.swiperIMG}
              src={dataIMG[0].url}
              alt="catImg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.swiperIMG}
              src={dataIMG[1].url}
              alt="catImg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.swiperIMG}
              src={dataIMG[2].url}
              alt="catImg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.swiperIMG}
              src={dataIMG[3].url}
              alt="catImg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.swiperIMG}
              src={dataIMG[4].url}
              alt="catImg"
            />
          </SwiperSlide>
        </Swiper>
      ) : null}

      <div className={style.infoWrapper}>
        <div className={style.nameWrapper}>
          <span className={style.breedName}>{data?.name}</span>
        </div>
        <span className={style.breedCharacter}>{item.description}</span>
        <div className={style.temperamentWrapper}>
          <span className={style.title}>Temperament:</span>
          <span className={style.temperamentDescription}>
            {data?.temperament}
          </span>
        </div>
        <div className={style.allChars}>
          <span className={style.origin}>
            <span className={style.title}>{`Origin:`}</span>
            <span className={style.description}>{data?.origin}</span>
          </span>
          <span className={style.weight}>
            <span className={style.title}>{`Weight:`}</span>
            <span
              className={style.description}
            >{`${data?.weight.metric} kgs`}</span>
          </span>
          <span className={style.lifeSpan}>
            <span className={style.title}>{`Life span:`}</span>
            <span
              className={style.description}
            >{`${data?.life_span} years`}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
