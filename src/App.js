import './App.css';
import React, { useState } from 'react';
import PostList from "./Components/PostList";
import Forma from './Components/Forma';

function App() {
  const [posti, setPosti] = useState([
    { img: "https://avatars.yandex.net/get-music-content/192707/818ad99d.a.4794388-1/m1000x1000", nazvanie: 'My Enemies & I - Funeral Party', opisanie: 'Обалденный трек', silka: 'https://music.yandex.ru/album/4794388/track/37760826' },
    { img: 'https://avatars.yandex.net/get-music-content/95061/64c49593.a.5870640-1/m1000x1000', nazvanie: 'Raizer - Explode', opisanie: 'Лютый вокал', silka: 'https://music.yandex.ru/album/5870640/track/43939174' },
    { img: 'https://avatars.yandex.net/get-music-content/97284/aed48cae.a.9233416-1/m1000x1000', nazvanie: 'Polaris - The Death of Me', opisanie: 'Качает безостановочно', silka: 'https://music.yandex.ru/album/9233416/track/59995587' },
    { img: 'https://avatars.yandex.net/get-music-content/118603/2f52ec68.a.7168623-1/m1000x1000', nazvanie: 'I Prevail - Bow Down', opisanie: 'Кланься дыааа', silka: 'https://music.yandex.ru/album/7168623/track/50443159' },
    { img: 'https://avatars.yandex.net/get-music-content/5234929/2c4b9751.a.17891264-1/m1000x1000', nazvanie: 'Error37 - Postman Pat Aint Got Shit on Me', opisanie: 'Чел сочно меняет флоу', silka: 'https://music.yandex.ru/album/17891264/track/90488653' },
    { img: 'https://avatars.yandex.net/get-music-content/118603/2f52ec68.a.7168623-1/m1000x1000', nazvanie: 'I Prevail - Gasoline', opisanie: 'Это ваще разрыв', silka: 'https://music.yandex.ru/album/7168623/track/51425532' },
    { img: 'https://avatars.yandex.net/get-music-content/5236179/77448205.a.18375851-1/m1000x1000', nazvanie: 'Wage War - Manic', opisanie: 'У чувака мания и это круто!', silka: 'https://music.yandex.ru/album/18375851/track/91965887' }
  ]
  )




  return (
    <div className="App">
      <div className='overlay'>
      <Forma onNewPost={(post)=>{setPosti([...posti, post]);}}/>
        <PostList posti={posti} />
      </div>  
    </div>
  );
}

export default App;
