// import styles =============================================================//
import scssHome from './home.module.scss';
// import images =============================================================//
import logo from './lafrenchstack-logo.svg';

// import components =========================================================//
import SocialBar from '../../components/SocialBar';
import Skill from '../../components/Skill';
// Home component ============================================================//
const Home = () => {
  return (
    <main>
      <div className={scssHome.profil}>
        <img src={logo} alt="logo" />
      </div>
      <Skill />
      <SocialBar />
    </main>
  );
};
export default Home;
