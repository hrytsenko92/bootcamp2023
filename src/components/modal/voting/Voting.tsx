import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../store/hook';
import { add } from '../../../../store/logSlice';
import { stateItemType } from '../../../../store/sliceType';
import style from './voting.module.scss';
import { format } from 'date-fns';
import { getData, postData } from '../../../dataLoaders';
import { VotingType } from './votingType';
import { Loader } from '../loader/Loader';
import likeD from '../../../assets/likeD.svg';
import DislikeD from '../../../assets/dislikeD.svg';
import FavouritesD from '../../../assets/favoriteD.svg';

export const Voting: FC = () => {
  const [catData, setCatData] = useState<VotingType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [logStack, setLogStack] = useState<stateItemType[]>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logSliceData = useAppSelector(state => state.logSliceData);

  const addLike = async () => {
    if (catData?.id) {
      const res = await postData('votes', {
        image_id: catData.id,
        value: 1,
        sub_id: import.meta.env.MySubID,
      });

      if (res.message === 'SUCCESS') {
        updateLogSlice('Likes', 'added');
      }
    }
  };
  const addDisLike = async () => {
    if (catData?.id) {
      const res = await postData('votes', {
        image_id: catData.id,
        value: 0,
        sub_id: import.meta.env.MySubID,
      });
      if (res.message === 'SUCCESS') {
        updateLogSlice('Dislikes', 'added');
      }
    }
  };
  const addFavourite = async () => {
    if (catData?.id) {
      const res = await postData('favourites', {
        image_id: catData.id,
        sub_id: import.meta.env.MySubID,
      });
      if (res.message === 'SUCCESS') {
        updateLogSlice('Favourites', 'added');
      }
    }
  };
  const updateLogSlice = (category: string, changes: string) => {
    if (catData?.id) {
      dispatch(
        add({
          image_id: catData?.id,
          time: Date.now(),
          category,
          changes,
        }),
      );
    }
  };
  const formatTime = (time: number) => {
    return format(new Date(time), 'HH:mm');
  };
  const updateLogStack = () => {
    const temp = [...logSliceData];
    setLogStack(temp.sort((a, b) => b.time - a.time));
  };
  useEffect(() => {
    logSliceData.length > 0 ? updateLogStack() : null;
    const dataLoader = async () => {
      setLoading(true);
      const data: VotingType[] = await getData(`images/search`);
      setCatData(data[0]);
      setLoading(false);
    };
    dataLoader();
  }, [logSliceData]);
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
        {logStack !== undefined ? (
          <ul className={style.logStackWrapper}>
            {logStack.map(item => (
              <li key={item.image_id} className={style.logStackItem}>
                <p className={style.logTime}>{formatTime(item.time)}</p>
                <p className={style.logMessage}>{`Image ID: ${item.image_id} was ${item.changes} to ${item.category}`}</p>
                {item.category === 'Likes' ? (
                  <img className={style.logSVG} src={likeD} alt="like" />
                ) : item.category === 'Dislikes' ? (
                  <img className={style.logSVG} src={DislikeD} alt="dislike" />
                ) : item.category === 'Favourites' ? (
                  <img className={style.logSVG} src={FavouritesD} alt="favourites" />
                ) : (
                  <Loader />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </section>
    );
};
