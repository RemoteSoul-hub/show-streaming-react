import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Manga = (props) => {
    return <Container>
        <h3>Manga</h3>
        <Content>
            <Wrap>
                <Link to='/'>
                    <img src="https://www.screentest.xyz/wp-content/uploads/2021/01/Granolah_survivor_arc.PNG.png" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://freegametips.com/wp-content/uploads/2020/12/1608486626_Dragon-Ball-Super-chapter-67-now-available-how-to-read-1024x576.jpg" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://gadgetfreeks.com/wp-content/uploads/2020/05/Dragon-Ball-Super-Manga-Chapter-60.jpg" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-1-Dragon-Ball-Super-Official-Manga-Trailer-YouTube.png" alt="" />
                </Link>
            </Wrap>
        </Content>
        </Container>

}

const Container = styled.div`
    padding: 0 0 26px;
`;
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow: hidden;   
 position: relative;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8); 
    }
`;

export default Manga;