import React from 'react';
import './styles/style.less';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, NotFound } from '@pages';

const App = (): React.ReactElement => (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="search" />} />
      <Route path="/search/*" element={<MainPage />} />
      <Route path="/search/:searchQuery/*" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
