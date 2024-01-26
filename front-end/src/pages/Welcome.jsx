import MainCSS from'./Welcome.module.css'

export default function Welcome() {
  return (
      <div className={MainCSS.background}>
        <div className={MainCSS.pmain}>
          <div className={MainCSS.text_box1}>
            <h1 className={MainCSS.wtext}>Welcome To <span className={MainCSS.yellow}> Quizzify</span></h1>
          </div>
          <div className={MainCSS.text_box2}>
            <p className={MainCSS.detail}> discover Endless Fun And Learning With Our Online Quiz System! Explore Diverse Topics, Challenge
                          Yourself, And Enjoy An Interactive Way To Test Your Knowledge. Start Playing And Dive Into A World Of
                          Quizzes Today!
        </p>
          </div>
        </div>
        <div className={MainCSS.container}>
          <a className={MainCSS.btext} href="./Login"><button className={MainCSS.btn}>Login</button></a>
          <a className={MainCSS.btext} href="./Register"><button className={MainCSS.btn}>Sign Up</button></a>
        </div>   
      </div> 
  )
}
