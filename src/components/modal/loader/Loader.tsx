import { FC } from 'react';
import style from './loader.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader: FC = () => {
  return (
    <section className={style.container}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </section>
  );
};
