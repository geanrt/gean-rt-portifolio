import "./Home.css";
import Container from "../../components/layout/container/Container";

import grade from "../../assets/images/grade.webp";

// sections
import HomeAprensatation from "../../components/page/home/aprensatation/HomeAprensatation";
import HomeMain from "../../components/page/home/main/HomeMain";
import HomeCommunity from "../../components/page/home/community/HomeCommunity";
import HomeDesigner from './../../components/page/home/designer/HomeDesigner';
import HomeSkills from '../../components/page/home/skills/HomeSkills';
// import HomeSponsorship from "../../components/page/home/sponsorship/HomeSponsorship";
// import HomeNfts from "../../components/page/home/nfts/HomeNfts";
// import HomeCryptos from "../../components/page/home/cryptos/HomeCryptos";
// import HomePlaylists from "../../components/page/home/playlists/HomePlaylists";
// import HomeFinal from "../../components/page/home/final/HomeFinal";
// import HomeInstagram from '../../components/page/home/instagram/HomeInstagram';
// import HomeYoutube from '../../components/page/home/youtube/HomeYoutube';

const Home = () => {
  return (
    <div className="home_cotainer">
      <Container>
        <div className="home">
          
          {/* sections */}
          <HomeAprensatation />

          <HomeMain />
          <HomeCommunity />

          <HomeDesigner />
          <HomeSkills />

           {/*

          <HomeNfts />
          <HomeInstagram />

          <HomeCryptos />
          <HomePlaylists />
          <HomeYoutube />

          <HomeSponsorship />

          <HomeFinal /> */}

          <div className="home_bg">
            <div className="home_bg_circle home_bg_circle_01"></div>
            <div className="home_bg_grade home_bg_grade_01">
              <img src={grade} alt="grade bg" />
            </div>
            <div className="home_bg_footer">
              <div className="home_bg_footer_lrow"></div>
              <div className="home_bg_footer_circle"></div>
              <div className="home_bg_footer_rrow"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
