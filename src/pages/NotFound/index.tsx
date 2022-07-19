import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.less';
import { Footer } from '@components';

export const NotFound = (): React.ReactElement => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.noPage}>
      <div className={styles.noPage__container}>
        <div className={styles.noPage__content}>
          <p>Page not found</p>
          <p>
            You will return to the main page automatically in <br />
            {count} s.
          </p>
        </div>
        <div className={styles.noPage__bg}>
          <img
            src="img/banner.jpg"
            alt="netflix"
            className={styles.noPage__bg_img}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
