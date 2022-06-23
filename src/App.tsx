import React from 'react';
import './styles/style.less';
import { Hero, Movies, Footer, FilterBar, ErrorBoundary } from '@components';

const App = (): React.ReactElement => (
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

export default App;
