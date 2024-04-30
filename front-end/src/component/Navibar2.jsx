import { Link } from 'react-router-dom';
import Styles from './Navibar2.module.css';

const Navibar2 = () => {
  return (
    <div>
      <div className={Styles.navibar2_component}>
        <div className={Styles.navibar_align}>
          <Link to={""}><img className={Styles.collapse_icon} src="./Navi Bar Icon.svg" alt="icon" /></Link>
          <Link to={"/home"}><img className={Styles.navibar2_logo} src="./nav-logo.svg" alt="logo" /></Link>
        </div>
        <div className={Styles.navibar2_icon}>
          <Link className={Styles.quiz_button} to={"/createandplay"}><button className={Styles.qb_style}> Create Quiz </button></Link>
          <Link className={Styles.icon_link} to={"/maintaince"}><img className={Styles.icon} src="./explore.svg" alt="" /></Link>
          <Link className={Styles.icon_link} to={"/maintaince"}><img className={Styles.icon} src="notification.svg" alt="" /></Link>
          <Link className={Styles.icon_link} to={"/profile"}><img className={Styles.icon} src="./user.svg" alt="icon" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
