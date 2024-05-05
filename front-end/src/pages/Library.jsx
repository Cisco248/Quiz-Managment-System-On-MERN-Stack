import Style from './Library.module.css';
import { useState } from 'react';
import Quizzes from "../component/Quizzes";
import SearchQuizzes from "../component/SearchQuizzes";
import SavedQuizzes from "../component/SavedQuizzes"

function Library() {

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
                <h3 className={Style.search_text}>Search Results</h3>
                <div className={Style.search_section}>
                    <input className={Style.search_box} type="search" placeholder='Search Your Interest' />
                    <button className={Style.search_button}>Search</button>
                </div>
            </div>
            <div className={Style.quick_selection}>
                <div className={Style.title}>
                    <h3 className={Style.title_style}>Quiz Selections</h3>
                </div>

                <div className={Style.discover}>
                    <button className={Style.discover_button} onClick={() => { 
                    setActiveComponent("Quizzes"); 
                    setIsSearchActive(false);
                    }}> Discover </button>
                </div>

                <div className={Style.saved}>
                    <button className={Style.saved_button} onClick={() => {
                    setActiveComponent("SavedQuizzes");
                    setIsSearchActive(false);
                    }}>Saved Quizzes</button>
                </div>

                <div className={Style.quiz_section}>
                    <div className={Style.quiz_section_style}>
                        <div className={Style.quiz_section_wrap}>
                            <h3 className={Style.search_text}>Click to Save or Play Quizzes</h3>
                            <SearchQuizzes onSearch={() => setIsSearchActive(true)} />{" "}
                            {/* Pass the setIsSearchActive function as a prop */}
                            {!isSearchActive && activeComponent === "Quizzes" && <Quizzes />}
                            {!isSearchActive && activeComponent === "SavedQuizzes" && <SavedQuizzes />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Library
