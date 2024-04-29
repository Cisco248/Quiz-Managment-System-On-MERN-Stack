import Styles from './Navibar2.module.css';

const Navibar2 = () => {
  return (
    <div>
      <div className={Styles.navibar2_component}>
        <div className={Styles.navibar_align}>
          <a href=""><img className={Styles.collapse_icon} src="./Navi Bar Icon.svg" alt="icon" /></a>
          <a href="/home"><img className={Styles.navibar2_logo} src="./nav-logo.svg" alt="logo" /></a>
        </div>
        <div className={Styles.navibar2_icon}>
          <a className={Styles.quiz_button} href="/quiz create"><button className={Styles.qb_style}> Create Quiz </button></a>
          <a className={Styles.icon_link} href="/maintaince"><img className={Styles.icon} src="./explore.svg" alt="" /></a>
          <a className={Styles.icon_link} href="/maintaince"><img className={Styles.icon} src="notification.svg" alt="" /></a>
          <a className={Styles.icon_link} href="/profile"><img className={Styles.icon} src="./user.svg" alt="icon" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
