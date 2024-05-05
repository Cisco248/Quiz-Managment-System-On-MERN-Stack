import Slider from '../component/image_slider/Slider'
import Style from './Home.module.css'
import { useState, useEffect } from "react";
import Quizzes from "../component/Quizzes";

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [ quizzes, setQuizzes ] = useState([]);

      // Fetch All the Quizzes
    useEffect(() => {
        const fetchUserQuizzes = async () => {
        try {
            const response = await fetch("http://localhost:8000/quizzes");
            if (!response.ok) {
            throw new Error("Failed to fetch quizzes");
            }
            const quizzesData = await response.json();
            setQuizzes(quizzesData);
        } catch (error) {
            console.error("Error fetching quizzes:", error.message);
        }
        };

        fetchUserQuizzes();
    }, []);

  return (
    <div>
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
                    <h3 className={Style.discover_title}> Discover </h3>{" "}
                </div>
                    <div className={Style.quiz_section}>
                        <div className={Style.quiz_section_style}>
                            <Quizzes />
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
    </div>
  )
}

export default Home
