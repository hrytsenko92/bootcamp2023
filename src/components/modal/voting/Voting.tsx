import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './voting.module.scss';
import { getImage } from '../../../dataLoaders';
import { VotingType } from './votingType';
import { Loader } from '../loader/Loader';


export const Voting: FC = () => {
  const [catData, setCatData] = useState<VotingType>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const addLike = () => {
  };
  const addDisLike = () => {
  };
  const addFavourite = () => {
  };
  useEffect(() => {
    const dataLoader = async () => {
      setLoading(true);
      const url = `https://api.thecatapi.com/v1/images/search`;
      const data: VotingType[] = await getImage(url);
      setCatData(data[0]);
      setLoading(false);
    };
    dataLoader();
  }, []);
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
            <span>VOTING</span>
          </p>
        </div>
        <div className={style.imageWrapper}>
          <img className={style.catImg} src={catData?.url} alt="just cat" />
          <div className={style.buttonsWrapper}>
            <button
              onClick={() => addLike()}
              className={style.btnLike}
            ></button>
            <button
              onClick={() => addFavourite()}
              className={style.btnFavourite}
            ></button>
            <button
              onClick={() => addDisLike()}
              className={style.btnDislike}
            ></button>
          </div>
        </div>
        <div className={style.logStackWrapper}>
        </div>
      </section>
    );
};
