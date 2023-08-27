import { FC } from 'react';
import style from './loader.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader: FC = () => {
  return (
    <section className={style.container}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </section>
  );
};
