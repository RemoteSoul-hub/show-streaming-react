import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import Manga from './Manga';
import Games from './Games';
import Trending from './Trending';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/Movie/movieSlice';
import {selectUserName } from '../features/user/userSlice';

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
let recommend = [];
let games = [];


useEffect(() => {
  console.log("hello");
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      console.log(recommend);
      switch (doc.data().type) {
        case "recommend":
          recommend = [...recommend, { id: doc.id, ...doc.data() }];
          break;

        case "games":
          games = [...games, { id: doc.id, ...doc.data() }];
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommend,
        games: games,
      })
    );
  });
}, [userName]);

    return <Container><ImgSlider/>
    <Viewers />
    <Recommends />
    <Manga />
    <Games />
    <Trending />
    </Container>
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;