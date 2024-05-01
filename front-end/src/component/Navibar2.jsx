import { Link } from 'react-router-dom';
import Styles from './Navibar2.module.css';

const Navibar2 = () => {
  return (
    <div>
      <div className={Styles.navibar2_component}>
        <div className={Styles.navibar_align}>
          <Link to={"/home"}><img className={Styles.navibar2_logo} src="./nav-logo.svg" alt="logo" /></Link>
        </div>
        <div className={Styles.navibar2_list}>
          <Link className={Styles.link} to={"/createandplay"}>Create Quiz</Link>
          <Link className={Styles.link} to={"/library"}>Library</Link>
          <Link className={Styles.link} to={"/maintaince"}>Discover</Link>
          <Link className={Styles.link} to={"/maintaince"}>Notifications</Link>
          <Link className={Styles.link} to={"/profile"}>Profile</Link>
          <Link className={Styles.link} to={"/leaderboard"}>Leaderbord</Link>
          <Link className={Styles.link} to={"/help"}>Help</Link>
          <Link className={Styles.link} to={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
