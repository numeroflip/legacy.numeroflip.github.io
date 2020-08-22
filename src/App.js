import React from 'react';
import MainLayout from './components/MainLayout'
import Header from './components/Header'

function App() {
  return (
    <MainLayout>
        <Header />
          <main>
              Main
          </main>
          <footer>
              Footer
          </footer>
    </MainLayout>
  );
}

export default App;
