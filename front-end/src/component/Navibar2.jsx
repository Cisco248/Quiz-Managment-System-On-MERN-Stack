import { NavLink } from 'react-router-dom';
import Styles from './Navibar2.module.css';

const Navibar2 = () => {
  return (
    <div>
      <div className={Styles.navibar2_component}>
        <div className={Styles.navibar_align}>
          <NavLink exact to={"/home"}><img className={Styles.navibar2_logo} src="./nav-logo.svg" alt="logo" /></NavLink>
        </div>
        <div className={Styles.navibar2_list}>
          <ul className={Styles.navi_bar_link_list}>
            <li className={Styles.link}><NavLink to={"/home"} className={Styles.link_list}>Home</NavLink></li>
            <li className={Styles.link}><NavLink to={"/createandplay"} className={Styles.link_list}>Create Quiz</NavLink></li>
            <li className={Styles.link}><NavLink to={"/library"} className={Styles.link_list}>Library</NavLink></li>
            <li className={Styles.link}><NavLink to={"/maintaince"} className={Styles.link_list}>Discover</NavLink></li>
            <li className={Styles.link}><NavLink to={"/leaderboard"} className={Styles.link_list}>Leaderbord</NavLink></li>
            <li className={Styles.link}><NavLink to={"/analytics"} className={Styles.link_list}>Analytics</NavLink></li>
            <li className={Styles.link}><NavLink to={"/profile"} className={Styles.link_list}>Profile</NavLink></li>
            <li className={Styles.link}><NavLink to={"/help2"} className={Styles.link_list}>Help</NavLink></li>
            <li className={Styles.link}><NavLink to={"/contact2"} className={Styles.link_list}>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
