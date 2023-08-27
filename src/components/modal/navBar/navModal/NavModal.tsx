import { FC, useEffect, useState } from 'react';
import { getData } from '../../../../dataLoaders';
import { useLocation } from 'react-router-dom';
import style from './navmodal.module.scss';
import { dataType } from './dataType';
import { useNavigate } from 'react-router-dom';

export const NavModal: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;
  const [data, setData] = useState<dataType[]>();
  const getCatData = async () => {
    if (from === 'likes' || from === 'dislikes') {
      const value = from === 'likes' ? 1 : from === 'dislikes' ? 0 : null;
      const res: dataType[] = await getData(`votes`, {
        sub_id: import.meta.env.VITE_MySubID,
        value,
        limit: 50,
      });
      if (from === 'likes') {
        const temp = [...res].filter(obj => obj.value === 1).slice(0, 20);
        setData(temp);
      } else {
        const temp = [...res].filter(obj => obj.value === 0).slice(0, 20);
        setData(temp);
      }
    } else if (from === 'favourites') {
      const res: dataType[] = await getData(`favourites`, {
        sub_id: import.meta.env.VITE_MySubID,
        limit: 50,
      });
      setData(res);
    }
  };
  useEffect(() => {
    getCatData();
  }, [from]);
  return (
    <section className={style.container}>
      <div className={style.nav}>
        <button
          onClick={() => navigate(-1)}
          className={style.goBackBTN}
        ></button>
        <p className={style.pageName}>
          <span>
            {from === 'likes'
              ? 'LIKES'
              : from === 'dislikes'
              ? 'DISLIKES'
              : from === 'favourites'
              ? 'FAVOURITES'
              : null}
          </span>
        </p>
      </div>
      <section className={style.gridContainer}>
        {data !== undefined
          ? data.map((item, index) => (
              <div className={style[`div${index}`]} key={item.id}>
                <img className={style.itemIMG} src={item.image.url} alt="cat" />
              </div>
            ))
          : null}
      </section>
    </section>
  );
};
