import React, { ReactElement, useReducer } from 'react';
import styles from './style.module.less';
import { ThreeDotsIcon } from '@icons';
import { Modal, MovieForm, Dropdown, Button } from '@components';
import { IMovie } from '@interfaces';
import { useAction, useMoviesState } from '@hooks';
import { useSearchParams } from 'react-router-dom';

interface IMovieOptionsProps {
  movie: IMovie;
  setShowOptions: (arg: boolean) => void;
}

interface IRenderOptions {
  id: number;
  view: string;
  name: string;
}

interface IState {
  isOptionsDropdown: boolean;
  isModalOpened: boolean;
  modalType: string;
}

export const MovieOptions = ({
  movie,
  setShowOptions,
}: IMovieOptionsProps): ReactElement => {
  const initialState = {
    isOptionsDropdown: false,
    isModalOpened: false,
    modalType: '',
  };

  const [state, dispatch] = useReducer(
    (state: IState, action: Partial<IState>): IState => {
      return { ...state, ...action };
    },
    initialState,
  );
  const { selectedMovie } = useMoviesState();
  const { requestDeleteMovieAction, selectMovieAction, putMovieValuesAction } =
    useAction();

  const [searchParams, setSearchParams] = useSearchParams();

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

  const deleteMovie = (id: number) => {
    requestDeleteMovieAction(id);

    if (selectedMovie?.id === id) {
      selectMovieAction();
      searchParams.delete('movie');
      setSearchParams(searchParams);
    }
  };

  const confirmDelete = () => {
    deleteMovie(movie.id);
    closeModal();
  };

  const editMovie = (movie: IMovie) => {
    !movie.tagline && (movie.tagline = 'tagline');
    putMovieValuesAction(movie, 'edit');
  };

  const listOptions = [
    { id: 1, view: 'listItem', onClick: () => openModal('edit'), name: 'Edit' },
    {
      id: 2,
      view: 'listItem',
      onClick: () => openModal('delete'),
      name: 'Delete',
    },
  ];

  const renderOptions = ({ name, view, id, ...rest }: IRenderOptions) => (
    <Button key={id} view={view} {...rest}>
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
            submitHandler={editMovie}
            additionalSubmitHandler={closeModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
