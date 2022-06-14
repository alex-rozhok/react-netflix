import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Logo, Search, Modal, MovieForm, Button } from '@components';

export const Hero = ({ changeMoviesData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
                changeMoviesData={changeMoviesData}
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
    </section>
  );
};

Hero.propTypes = {
  changeMoviesData: PropTypes.func,
};
