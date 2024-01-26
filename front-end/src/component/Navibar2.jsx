import styles from './Navibar2.module.css';

const FrameComponent = () => {
  return (
    <header className={styles.navBarWrapper}>
      <div className={styles.navBar}>

        <div className={styles.navigationBar}>
          
          <div className={styles.navLogo}>
            <img className={styles.logoVectetIcon} src='../assets/Logo Vectet.svg'/>
            <h2 className={styles.quizzify}>QUIZZIFY</h2>
          </div>

        </div>
        <div className={styles.icon}>
          <div className={styles.slideFrame}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className={styles.slideFrame1}>
            <div className={styles.notificationIconWrapper}>
              <img
                className={styles.notificationIcon}
                loading="eager"
                alt=""
                src="/notification-icon.svg"
              />
            </div>
          </div>
          <div className={styles.slideFrame2}>
            <div className={styles.userSvgrepoCom1Wrapper}>
              <img
                className={styles.userSvgrepoCom1Icon}
                loading="eager"
                alt=""
                src="/usersvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.searchBar}>
          <input
            className={styles.searchQuizes}
            placeholder="Search Quizes"
            type="text"
          />
          <div className={styles.searchBarChild} />
          <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          <div className={styles.searchBarItem} />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
