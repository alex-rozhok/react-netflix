import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { ThreeDots } from '../../icons';
import { Modal, MovieForm, Dropdown } from '../index';
import { Button } from '../../UI';

export const MovieOptions = ({ movie, setMoviesData, setShowOptions }) => {
  const [isOptionsDropdown, setIsOptionsDropdown] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const openDelete = () => {
    setIsDeleteModal(true);
    setIsOptionsDropdown(false);
  };

  const openEdit = () => {
    setIsEditModal(true);
    setIsOptionsDropdown(false);
  };

  const closeDelete = () => {
    setShowOptions(false);
    setIsDeleteModal(false);
  };
  const closeEdit = () => {
    setShowOptions(false);
    setIsEditModal(false);
  };

  const confirmDelete = () => {
    setMoviesData((prev) => prev.filter((el) => el.id !== movie.id));
    setIsDeleteModal(false);
  };

  return (
    <>
      <div className={styles.movie__dropdown}>
        <Dropdown
          isShow={isOptionsDropdown}
          closeDropdown={() => setIsOptionsDropdown(false)}
        >
          <Dropdown.Button
            view="circle"
            onClick={() => {
              setIsOptionsDropdown(!isOptionsDropdown);
            }}
          >
            <ThreeDots />
          </Dropdown.Button>
          <Dropdown.Body
            isShow={isOptionsDropdown}
            closeDropdown={() => setIsOptionsDropdown(false)}
            classes={styles.options__wrapper}
            closeButton={true}
          >
            <Button view="listItem" onClick={openEdit}>
              Edit
            </Button>
            <Button view="listItem" onClick={openDelete}>
              Delete
            </Button>
          </Dropdown.Body>
        </Dropdown>
      </div>
      <Modal isOpen={isDeleteModal} closeModal={closeDelete}>
        <Modal.Body title={'DELETE MOVIE'}>
          <p>Are you sure you want to delete this movie?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={confirmDelete} view="main">
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal isOpen={isEditModal} closeModal={closeEdit}>
        <Modal.Body title={'EDIT MOVIE'}>
          <MovieForm id="editMovie" />
        </Modal.Body>
        <Modal.Footer>
          <Button form="editMovie" type="reset" view="secondary">
            RESET
          </Button>
          <Button form="editMovie" type="submit" view="main">
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

MovieOptions.propTypes = {
  movie: PropTypes.object.isRequired,
  setMoviesData: PropTypes.func.isRequired,
  setShowOptions: PropTypes.func,
};
