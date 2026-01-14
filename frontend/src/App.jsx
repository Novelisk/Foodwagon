import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Searchbar } from './components/SearchBar/Searchbar';

function App() {
  return (
    <>
      <Header />
      <Searchbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
