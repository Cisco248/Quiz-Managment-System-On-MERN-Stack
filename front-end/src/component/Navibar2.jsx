import Styles from './Navibar2.module.css';

const Navibar2 = () => {
  return (
    <div>
      <div className={Styles.navibar2_component}>
        <div className={Styles.navibar_align}>
          <img className={Styles.collapse_icon} src="./Navi Bar Icon.svg" alt="" />
          <img className={Styles.navibar2_logo} src="./nav-logo.svg" alt="" />
        </div>
        <div className={Styles.navibar2_icon}>
            <img className={Styles.icon} src="./explore.svg" alt="" />
            <img className={Styles.icon} src="notification.svg" alt="" />
            <img className={Styles.icon} src="./user.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
