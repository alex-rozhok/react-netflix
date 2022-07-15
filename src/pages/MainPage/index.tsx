import React from 'react';
import { ErrorBoundary, FilterBar, Footer, Hero, Movies } from '@components';

export const MainPage = (): React.ReactElement => (
  <>
    <Hero />
    <main className="main">
      <FilterBar />
      <ErrorBoundary>
        <Movies />
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);
