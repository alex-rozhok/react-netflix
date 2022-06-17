import React, { FC, useReducer } from 'react';
import styles from './style.module.less';
import { ThreeDotsIcon } from '@icons';
import { Modal, MovieForm, Dropdown, Button } from '@components';
import { deleteAction, showMovieAction } from '@actions';
import { useAppContext } from '@hooks';
import { IMovie } from '@types';

interface MovieOptionsProps {
  movie: IMovie;
  setShowOptions: (arg: boolean) => void;
}

export const MovieOptions: FC<MovieOptionsProps> = ({
  movie,
  setShowOptions,
}) => {
  const initialState = {
    isOptionsDropdown: false,
    isModalOpened: false,
    modalType: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialState);

  const {
    state: { selectMovie },
    dispatch: appDispatch,
  } = useAppContext();

  const toggleDropdown = () =>
    dispatch({
      isOptionsDropdown: !state.isOptionsDropdown,
    });

  const closeDropdown = () => dispatch({ isOptionsDropdown: false });

  const openModal = (modalType: string) => {
    dispatch({
      isModalOpened: true,
      isOptionsDropdown: false,
      modalType,
    });
  };
  const closeModal = () => setShowOptions(false);

  const deleteMovie = (payload: IMovie) => {
    appDispatch(deleteAction(payload));
    selectMovie?.id === payload.id && appDispatch(showMovieAction(null));
  };

  const confirmDelete = () => {
    deleteMovie(movie);
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

  const renderOptions = ({ name, view, ...rest }) => (
    <Button key={name} view={view} {...rest}>
      {name}
    </Button>
  );
  return (
    <>
      <div className={styles.movie__dropdown}>
        <Dropdown
          isShow={state.isOptionsDropdown}
          closeDropdown={closeDropdown}
          isCloseButton={true}
        >
          <Dropdown.Button view="circle" onClick={toggleDropdown}>
            <ThreeDotsIcon />
          </Dropdown.Button>
          <Dropdown.Body classes={styles.options__wrapper}>
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
            additionalSubmitHandler={closeModal}
          />
        </Modal.Body>
        <Modal.Footer>{editMovieButtons.map(renderOptions)}</Modal.Footer>
      </Modal>
    </>
  );
};
