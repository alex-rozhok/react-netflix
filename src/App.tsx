import React, { FC } from 'react';
import './styles/style.less';
import { Hero, Movies, Footer, FilterBar, ErrorBoundary } from '@components';
import { AppContextProvider } from '@context';

const App: FC = () => (
  <AppContextProvider>
    <Hero />
    <main className="main">
      <FilterBar />
      <ErrorBoundary>
        <Movies />
      </ErrorBoundary>
    </main>
    <Footer />
  </AppContextProvider>
);

export default App;
