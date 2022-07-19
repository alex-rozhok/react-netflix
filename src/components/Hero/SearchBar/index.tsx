import React, { ReactElement, useState } from 'react';
import styles from '../style.module.less';
import { Logo, Search, Modal, MovieForm, Button } from '@components';
import { useAction } from '@hooks';
import { IMovie } from '@interfaces';

export const SearchBar = (): ReactElement => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { putMovieValuesAction } = useAction();
  const openModalHandler = () => setModalIsOpen(true);
  const closeModalHandler = () => setModalIsOpen(false);
  const createMovie = (movie: IMovie) => {
    putMovieValuesAction(movie, 'add');
  };
  return (
    <>
      <div className="row space-between">
        <Logo />
        <Button onClick={openModalHandler} view="third">
          + ADD MOVIE
        </Button>

        <Modal isOpen={modalIsOpen} closeModal={closeModalHandler}>
          <Modal.Body title="ADD MOVIE">
            <MovieForm
              formId="addMovie"
              submitHandler={createMovie}
              additionalSubmitHandler={closeModalHandler}
            />
          </Modal.Body>
        </Modal>
      </div>
      <div className={styles.hero__search}>
        <Search />
      </div>
      <div className={styles.hero__background}>
        <img
          src="img/banner.jpg"
          alt="netflix"
          className={styles.hero__background_img}
        />
      </div>
    </>
  );
};
