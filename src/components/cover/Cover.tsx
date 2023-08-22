import { FC } from "react";
import style from './cover.module.scss';
import girlPet from '../../assets/girlPet.png';

export const Cover: FC = () => {
    return (
      <section className={style.container}>
        <img src={girlPet} alt="girl and per" className={style.img} />
        <div className={style.bcground}>
        </div>
      </section>
    );
}