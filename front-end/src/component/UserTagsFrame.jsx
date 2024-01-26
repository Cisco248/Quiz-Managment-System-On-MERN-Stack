import styles from './UserTagsFrame.module.css';

const UserTagsFrame = () => {
  return (
    <div className={styles.userTagsFrame}>
      <div className={styles.userTags}>
        <b className={styles.tags}>Tags</b>
        <div className={styles.biologyFrameWrapper}>
          <div className={styles.biologyFrame}>
            <div className={styles.mathsRectangle}>
              <div className={styles.scienceFrame}>
                <button className={styles.biology}>
                  <div className={styles.technologyFrame} />
                  <div className={styles.biology1}>Biology</div>
                </button>
                <div className={styles.subjectsPanel}>
                  <div className={styles.subjectsPanelChild} />
                  <div className={styles.mathsWrapper}>
                    <button className={styles.maths}>
                      <div className={styles.mathsChild} />
                      <div className={styles.maths1}>Maths</div>
                    </button>
                  </div>
                  <button className={styles.economics}>
                    <div className={styles.economicsChild} />
                    <div className={styles.economics1}>Economics</div>
                  </button>
                  <div className={styles.musicWrapper}>
                    <div className={styles.music}>
                      <div className={styles.musicChild} />
                      <div className={styles.music1}>
                        <p className={styles.music2}>Music</p>
                      </div>
                    </div>
                  </div>
                  <button className={styles.technology}>
                    <div className={styles.technologyChild} />
                    <div className={styles.technology1}>Technology</div>
                  </button>
                  <div className={styles.scienceWrapper}>
                    <button className={styles.science}>
                      <div className={styles.scienceChild} />
                      <div className={styles.science1}>Science</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialScienceWrapper}>
              <div className={styles.socialScience}>
                <div className={styles.socialScienceChild} />
                <div className={styles.socialStudies}>Social Studies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.discoverTab}>
        <b className={styles.discover}>{`Discover `}</b>
        <div className={styles.discover1}>
          <div className={styles.discoverChild} />
          <div className={styles.frameParent}>
            <img
              className={styles.frameIcon}
              loading="eager"
              alt=""
              src="/1.svg"
            />
            <img
              className={styles.frameIcon1}
              loading="eager"
              alt=""
              src="/2.svg"
            />
            <img className={styles.frameIcon2} alt="" src="/frame.svg" />
            <img className={styles.frameIcon3} alt="" src="/frame.svg" />
            <img className={styles.frameIcon4} alt="" src="/frame.svg" />
            <img className={styles.frameIcon5} alt="" src="/frame.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTagsFrame;
