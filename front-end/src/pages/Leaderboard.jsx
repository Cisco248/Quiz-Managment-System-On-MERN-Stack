import Navibar2 from "../component/Navibar2";
import Footer from "../component/Footer";
import Style from "./Leaderboard.module.css";

function Leaderboard() {
  return (
    <div>
      <Navibar2 />
      <div className={Style.leaderboard_page}>
        <div className={Style.page_title}>
          <h1 className={Style.title_name}>Leaderboard</h1>
        </div>
        <div className={Style.leaderboard_content}>
          <div className={Style.main_box}>
            <div className={Style.box1}>
              <h2 className={Style.user_number}>1</h2>
              <h2 className={Style.users_name}>Eshan Fernando</h2>
              <h3 className={Style.user_point}>1098 Points</h3>
            </div>
            <div className={Style.box2}>
              <h2 className={Style.user_number}>2</h2>
              <h2 className={Style.users_name}>Naveen Mendis</h2>
              <h3 className={Style.user_point}>1090 Points</h3>
            </div>
            <div className={Style.box3}>
              <h2 className={Style.user_number}>3</h2>
              <h2 className={Style.users_name}>Pathum Kavinda</h2>
              <h3 className={Style.user_point}>1085 Points</h3>
            </div>
            <div className={Style.box4}>
              <h2 className={Style.user_number}>4</h2>
              <h2 className={Style.users_name}>Shehan Perera</h2>
              <h3 className={Style.user_point}>1080 Points</h3>
            </div>
            <div className={Style.box5}>
              <h2 className={Style.user_number}>5</h2>
              <h2 className={Style.users_name}>Sahan Tharuka</h2>
              <h3 className={Style.user_point}>1060 Points</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Leaderboard;
