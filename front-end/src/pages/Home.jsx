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
            <a className={Style.box1} href='/maintaince'>Science</a>
            <a className={Style.box2} href='/maintaince'>Maths</a>
            <a className={Style.box3} href='/maintaince'>Biology</a>
            <a className={Style.box4} href='/maintaince'>Technology</a>
            <a className={Style.box5} href='/maintaince'>Music</a>
            <a className={Style.box6} href='/maintaince'>Social Studies</a>
            <a className={Style.box7} href='/maintaince'>Economics</a>
        </div>
        <div className={Style.home_page_container}>
            <div className={Style.home_page_container_row1}>
                <div className={Style.discover}>
                    <div className={Style.quiz_section_style}>
                        <div className={Style.quiz_section_wrap}>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/maths.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Maths</h4>
                                        <h6 className={Style.quiz_creator}>Create by : Adithya</h6>
                                    </div>
                                </div>
                            </a>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/biology.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Biology</h4>
                                        <h6 className={Style.quiz_creator}>Create by : Pasindu</h6>
                                    </div>
                                </div>
                            </a>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/technology.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Malware</h4>
                                        <h6 className={Style.quiz_creator}>Create by : Ishita</h6>
                                    </div>
                                </div>
                            </a>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/music.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Music</h4>
                                        <h6 className={Style.quiz_creator}>Create by : Lahiru</h6>
                                    </div>
                                </div>
                            </a>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/science.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Animals</h4>
                                        <h6 className={Style.quiz_creator}>Create by : Lakshan</h6>
                                    </div>
                                </div>
                            </a>
                            <a className={Style.quiz_box_link} href="/maintaince">
                                <div className={Style.quiz_box}>
                                    <img className={Style.quiz_img} src="/economic.png" alt="" />
                                    <div className={Style.quiz_box_text}>
                                        <h4 className={Style.quiz_title}>Trade Center</h4>
                                        <h6 className={Style.quiz_creator}>Create by : xlk</h6>
                                    </div>
                                </div>
                            </a>
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
                        <a href='/leaderboard' className={Style.leaderboard_title_link}>
                            <h2 className={Style.leaderboard_title}>Leaderboard</h2>
                        </a>
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
