import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { ThreeDots } from '@icons';
import { Modal, MovieForm, Dropdown, Button } from '@components';

export const MovieOptions = ({
  movie,
  deleteMovie,
  setShowOptions,
  changeMoviesData,
}) => {
  const initialState = {
    isOptionsDropdown: false,
    isModalOpened: false,
    modalType: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialState);

  const toggleDropdown = () =>
    dispatch({
      isOptionsDropdown: !state.isOptionsDropdown,
    });

  const closeDropdown = () => dispatch({ isOptionsDropdown: false });

  const openModal = (modalType) => {
    dispatch({
      isModalOpened: true,
      isOptionsDropdown: false,
      modalType,
    });
  };
  const closeModal = () => setShowOptions(false);

  const confirmDelete = () => {
    deleteMovie(movie.id);
    closeModal();
  };

  const listOptions = [
    { view: 'listItem', onClick: () => openModal('edit'), name: 'Edit' },
    { view: 'listItem', onClick: () => openModal('delete'), name: 'Delete' },
  ];

  const editMovieButtons = [
    { view: 'secondary', type: 'reset', name: 'RESET', form: 'editMovie' },
    { view: 'main', type: 'submit', name: 'SUBMIT', form: 'editMovie' },
  ];

  const renderOptions = ({ name, ...rest }) => (
    <Button key={name} {...rest}>
      {name}
    </Button>
  );
  return (
    <>
      <div className={styles.movie__dropdown}>
        <Dropdown
          isShow={state.isOptionsDropdown}
          closeDropdown={closeDropdown}
        >
          <Dropdown.Button view="circle" onClick={toggleDropdown}>
            <ThreeDots />
          </Dropdown.Button>
          <Dropdown.Body
            isShow={state.isOptionsDropdown}
            closeDropdown={closeDropdown}
            classes={styles.options__wrapper}
            closeButton={true}
          >
            {listOptions.map(renderOptions)}
          </Dropdown.Body>
        </Dropdown>
      </div>

      <Modal
        isOpen={state.isModalOpened && state.modalType === 'delete'}
        closeModal={closeModal}
      >
        <Modal.Body title={'DELETE MOVIE'}>
          <p>Are you sure you want to delete this movie?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={confirmDelete} view="main">
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={state.isModalOpened && state.modalType === 'edit'}
        closeModal={closeModal}
      >
        <Modal.Body title={'EDIT MOVIE'}>
          <MovieForm
            formId="editMovie"
            movie={movie}
            changeMoviesData={changeMoviesData}
            additionalSubmitHandler={closeModal}
          />
        </Modal.Body>
        <Modal.Footer>{editMovieButtons.map(renderOptions)}</Modal.Footer>
      </Modal>
    </>
  );
};

MovieOptions.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  setShowOptions: PropTypes.func,
  changeMoviesData: PropTypes.func,
};
