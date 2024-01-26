import { useCallback } from "react";
import FrameComponent from '../component/Navibar2';
import UserTagsFrame from '../component/UserTagsFrame';
import styles from './Home.module.css';

const Home = () => {
  const onHomePageContainerClick = useCallback(() => {
    // Please sync "Navigation Bar" to the project
  }, []);

  return (
    <div className={styles.homePage} onClick={onHomePageContainerClick}>
      <FrameComponent />
      <main className={styles.slideBar}>
        <section className={styles.parent}>
          <img className={styles.icon} alt="" src="/29493-1@2x.png" />
          <img
            className={styles.slideBarIcon}
            loading="eager"
            alt=""
            src="/slide-bar.svg"
          />
        </section>
        <section className={styles.userTagsFrameParent}>
          <UserTagsFrame />
          <div className={styles.leaderboardWrapper}>
            <div className={styles.leaderboard}>
              <div className={styles.users}>
                <b className={styles.leaderboard1}>Leaderboard</b>
                <div className={styles.tag}>
                  <div className={styles.tagChild} />
                  <div className={styles.user03UserContainer}>
                    <p className={styles.user03}>User 03</p>
                    <p className={styles.user05}>User 05</p>
                    <p className={styles.user01}>User 01</p>
                    <p className={styles.user04}>User 04</p>
                    <p className={styles.user02}>User 02</p>
                  </div>
                </div>
              </div>
              <div className={styles.science}>
                <div className={styles.economics}>
                  <b className={styles.users1}>Users</b>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.user01UserContainer}>
                      <p className={styles.user011}>User 01</p>
                      <p className={styles.user021}>User 02</p>
                      <p className={styles.user031}>User 03</p>
                      <p className={styles.user041}>User 04</p>
                      <p className={styles.user051}>User 05</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.copyright}>
        <div className={styles.quizzifyQuiz}>
          Quizzify - Quiz System Project © 2023. Design by Team 56
        </div>
      </footer>
    </div>
  );
};

export default Home;
