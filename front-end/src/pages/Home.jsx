import Footer from '../component/Footer'
import Navibar2 from '../component/Navibar2'
import Style from './Home.module.css'

function Home() {
  return (
    <div>
      <Navibar2 />
      <div className={Style.home_page}>
        <div className={Style.slider}>
            {/* Image Slider */}
        </div>
        <div className={Style.home_page_container}>
            <div className={Style.tags}>
                <div className={Style.box1}></div>
                <div className={Style.box2}></div>
                <div className={Style.box3}></div>
                <div className={Style.box4}></div>
                <div className={Style.box5}></div>
                <div className={Style.box6}></div>
                <div className={Style.box7}></div>
                <div className={Style.box8}></div>
            </div>
            <div className={Style.leaderboar}>
                <h3 className={Style.user_leaderboard}></h3>
                <h3 className={Style.user_leaderboard}></h3>
                <h3 className={Style.user_leaderboard}></h3>
                <h3 className={Style.user_leaderboard}></h3>
                <h3 className={Style.user_leaderboard}></h3>
            </div>
            <div className={Style.discover}>
                <div className={Style.quiz_box1}></div>
                <div className={Style.quiz_box2}></div>
                <div className={Style.quiz_box3}></div>
                <div className={Style.quiz_box4}></div>
                <div className={Style.quiz_box5}></div>
                <div className={Style.quiz_box6}></div>
            </div>
            <div className={Style.users}>
                <h3 className={Style.users_name}></h3>
                <h3 className={Style.users_name}></h3>
                <h3 className={Style.users_name}></h3>
                <h3 className={Style.users_name}></h3>
                <h3 className={Style.users_name}></h3>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
