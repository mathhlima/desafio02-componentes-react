import { useContext, useEffect, useState } from "react";
import MyContext from "../contexts/myContexts";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  // Complete aqui

  const {selectedGenreId, setSelectedGenreId} = useContext(MyContext); // seta o genero do filme ma side bar, sempre começa no primeiro que é acao

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => { // busca na api os generos existente para exibir na side bar
      //console.log(response, 'response')
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    //console.log(id, 'genero selecionado')
  }

  return (

      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )

  
}