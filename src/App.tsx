import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';


import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import MyContext from './contexts/myContexts'





export function App() {
  
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    
    <MyContext.Provider value={{selectedGenreId, setSelectedGenreId}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
      </div>
    </MyContext.Provider>
     
  )
}