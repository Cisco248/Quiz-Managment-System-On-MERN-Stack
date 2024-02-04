import Footer from '../component/Footer'
import Navibar2 from '../component/Navibar2'
import Slider from '../component/image_slider/Slider'
import Style from './Home.module.css'

function Home() {
  return (
    <div>
      <Navibar2 />
      <div className={Style.home_page}>
        <div className={Style.slider}>
            <Slider className={Style.slider}/>
        </div>
        <div className={Style.tag_button}>
            <button className={Style.box1}>Science</button>
            <button className={Style.box2}>Maths</button>
            <button className={Style.box3}>Biology</button>
            <button className={Style.box4}>Technology</button>
            <button className={Style.box5}>Music</button>
            <button className={Style.box6}>Social Studies</button>
            <button className={Style.box7}>Economics</button>
        </div>
        <div className={Style.home_page_container}>
            <div className={Style.home_page_container_row1}>
                <div className={Style.discover}>
                    <div className={Style.quiz_section_style}>
                        <div className={Style.quiz_section_wrap}>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/maths.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Maths</h4>
                                    <h6 className={Style.quiz_creator}>Create by : Adithya</h6>
                                </div>
                            </div>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/biology.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Biology</h4>
                                    <h6 className={Style.quiz_creator}>Create by : Pasindu</h6>
                                </div>
                            </div>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/technology.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Malware</h4>
                                    <h6 className={Style.quiz_creator}>Create by : Ishita</h6>
                                </div>
                            </div>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/music.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Music</h4>
                                    <h6 className={Style.quiz_creator}>Create by : Lahiru</h6>
                                </div>
                            </div>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/science.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Animals</h4>
                                    <h6 className={Style.quiz_creator}>Create by : Lakshan</h6>
                                </div>
                            </div>
                            <div className={Style.quiz_box}>
                                <img className={Style.quiz_img} src="/economic.png" alt="" />
                                <div className={Style.quiz_box_text}>
                                    <h4 className={Style.quiz_title}>Trade Center</h4>
                                    <h6 className={Style.quiz_creator}>Create by : xlk</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.home_page_container_row2}>
                <div className={Style.users}>
                    <div className={Style.user_title_box}>
                        <h2 className={Style.user_title}>Users</h2>
                    </div>
                    <div className={Style.users_name_box}>
                        <h3 className={Style.users_name}>Eshan Fernando</h3>
                        <h3 className={Style.users_name}>Naveen Mendis</h3>
                        <h3 className={Style.users_name}>Pathum Kavinda</h3>
                        <h3 className={Style.users_name}>Pasindu Kavinda</h3>
                        <h3 className={Style.users_name}>Adithya Ramanayake</h3>
                    </div>
                </div>
                <div className={Style.leaderboard}>
                    <div className={Style.leaderboard_title_box}>
                        <h2 className={Style.leaderboard_title}>Leaderboard</h2>
                    </div>
                    <div className={Style.user_leaderboard_box}>
                        <h3 className={Style.user_leaderboard}>Eshan Fernando</h3>
                        <h3 className={Style.user_leaderboard}>Naveen Mendis</h3>
                        <h3 className={Style.user_leaderboard}>Pathum Kavinda</h3>
                        <h3 className={Style.user_leaderboard}>Shehan Perera</h3>
                        <h3 className={Style.user_leaderboard}>Sahan Tharuka</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
