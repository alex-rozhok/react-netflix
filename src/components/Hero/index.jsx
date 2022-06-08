import React, { useState } from 'react';
import styles from './style.module.less';
import { Logo, Search, Modal, MovieForm } from '../index';
import { Button } from '../../UI';

export const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row space-between">
          <Logo />
          <Button onClick={() => setModalIsOpen(true)} view="third">
            + ADD MOVIE
          </Button>

          <Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
            <Modal.Body title="ADD MOVIE">
              <MovieForm id="addMovie" />
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
