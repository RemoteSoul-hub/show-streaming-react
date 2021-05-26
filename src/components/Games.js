import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Games = (props) => {
    return <Container>
        <h3>Video Games</h3>
        <Content>
            <Wrap>
                <Link to='/'>
                    <img src="https://i.ytimg.com/vi/oiBWFKnd7oM/maxresdefault.jpg" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ_image1600w.jpg" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://www.crypto-sports.network/sites/default/files/styles/slider/public/banner/dbxv2-banner.jpg?itok=HxjgiACy" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'>
                    <img src="https://digistatement.com/wp-content/uploads/2021/05/ogp_ww_20190708.jpg" alt="" />
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

export default Games;