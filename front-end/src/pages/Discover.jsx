import Style from './Discover.module.css'
import { useState } from 'react';
import SearchQuizzes from "../component/SearchBar";
import Quizzes from '../component/Quizzes';

const Discover = () => {

    const [activeComponent, setActiveComponent] = useState("Quizzes");
    const [isSearchActive, setIsSearchActive] = useState(false); // Add this line

  return (
    <div>
        <div className={Style.library_page}>
            <div className={Style.page_title}>
                <h1 className={Style.title_name}>Explore Your Interest</h1>
            </div>
            <div className={Style.tab_button}>
                <button className={Style.box1}>Science</button>
                <button className={Style.box2}>Maths</button>
                <button className={Style.box3}>Biology</button>
                <button className={Style.box4}>Technology</button>
                <button className={Style.box5}>Music</button>
                <button className={Style.box6}>Social Studies</button>
                <button className={Style.box7}>Economics</button>
            </div>
            <div className={Style.search_bar}>
                <SearchQuizzes className={Style.search_bar_aligment} onSearch={() => setIsSearchActive(true)} />{" "}
            </div>
            <div className={Style.quick_selection}>
                <div className={Style.title}>
                    <h3 className={Style.title_style}>Quiz Selections</h3>
                </div>

                <div className={Style.button_container}>
                    <div className={Style.button_container_section}>
                        <button className={Style.discover_button} onClick={() => { setActiveComponent("Quizzes"); setIsSearchActive(false); }}> Discover </button>
                        <button className={Style.saved_button} onClick={() => { setActiveComponent("SavedQuizzes"); setIsSearchActive(false); }}>Saved Quizzes</button>
                    </div>
                </div>

                {/* <div className={Style.quiz_section}> */}
                    {/* <div className={Style.quiz_section_style}> */}
                        {/* <div className={Style.quiz_section_wrap}> */}
                            <h3 className={Style.search_text}>Click to Save or Play Quizzes</h3>
                            {/* Pass the setIsSearchActive function as a prop */}
                            { !isSearchActive && activeComponent === "Quizzes" && <Quizzes /> }
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Discover
