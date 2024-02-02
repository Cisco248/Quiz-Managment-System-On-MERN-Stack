import React from 'react'
import Navibar2 from '../component/Navibar2'
import Footer from '../component/Footer'
import Style from './LeaderBoard.module.css'

function LeaderBoard() {
  return (
    <div>
      <Navibar2 />
      <div className={Style.leaderboard_page}>
          <div className={Style.page_title}>
              <h1 className={Style.title_name}>Leaderboard</h1>
          </div>
          <div className={Style.leaderboard_content}>
              <div className={Style.box1}>
                  <h2 className={Style.user_number}>1</h2>
                  <img className={Style.profic} src="" alt="" />
                  <h2 className={Style.users_name}>Eshan Fernando</h2>
                  <h3 className={Style.user_point}>1098 Points</h3>
              </div>
              <div className={Style.box2}>
                  <img className={Style.profic} src="" alt="" />
                  <h2 className={Style.users_name}></h2>
                  <h3 className={Style.user_point}></h3>
              </div>
              <div className={Style.box3}>
                  <img className={Style.profic} src="" alt="" />
                  <h2 className={Style.users_name}></h2>
                  <h3 className={Style.user_point}></h3>
              </div>
              <div className={Style.box4}>
                  <img className={Style.profic} src="" alt="" />
                  <h2 className={Style.users_name}></h2>
                  <h3 className={Style.user_point}></h3>
              </div>
              <div className={Style.box5}>
                  <img className={Style.profic} src="" alt="" />
                  <h2 className={Style.users_name}></h2>
                  <h3 className={Style.user_point}></h3>
              </div>
          </div>
          
      </div>
      <Footer />
    </div>
  )
}

export default LeaderBoard
