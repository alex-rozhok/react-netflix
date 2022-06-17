import React, { FC, useState } from 'react';
import styles from './style.module.less';
import { Logo, Search, Modal, MovieForm, Button } from '@components';

export const Home: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const openModalHandler = () => setModalIsOpen(true);
  const closeModalHandler = () => setModalIsOpen(false);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row space-between">
          <Logo />
          <Button onClick={openModalHandler} view="third">
            + ADD MOVIE
          </Button>

          <Modal isOpen={modalIsOpen} closeModal={closeModalHandler}>
            <Modal.Body title="ADD MOVIE">
              <MovieForm
                formId="addMovie"
                additionalSubmitHandler={closeModalHandler}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button form="addMovie" type="reset" view="secondary">
                RESET
              </Button>
              <Button form="addMovie" type="submit" view="main">
                SUBMIT
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className={styles.hero__search}>
          <Search />
        </div>
      </div>
      <div className={styles.hero__background}>
        <img
          src="img/banner.jpg"
          alt="netflix"
          className={styles.hero__background_img}
        />
      </div>
    </section>
  );
};
