import MainCSS from "./Welcome.module.css";
import Navibar from "../component/Navibar";
import Footer from "../component/Footer";

export default function Welcome() {
  return (
    <div>
      <Navibar />
      <div className={MainCSS.background}>
        <div className={MainCSS.pmain}>
          <div className={MainCSS.text_box1}>
            <h1 className={MainCSS.wtext}>
              Welcome To <span className={MainCSS.yellow}> Quizzify</span>
            </h1>
          </div>
          <div className={MainCSS.text_box2}>
            <p className={MainCSS.detail}>
              {" "}
              discover Endless Fun And Learning With Our Online Quiz System!
              Explore Diverse Topics, Challenge Yourself, And Enjoy An
              Interactive Way To Test Your Knowledge. Start Playing And Dive
              Into A World Of Quizzes Today!
            </p>
          </div>
        </div>
        <div className={MainCSS.container}>
          <a className={MainCSS.btext} href="./Login">
            <button className={MainCSS.btn}>Login</button>
          </a>
          <a className={MainCSS.btext} href="./Register">
            <button className={MainCSS.btn}>Sign Up</button>
          </a>
        </div>

        {/* <div className={MainCSS.wel_about}>
          <div className={MainCSS.about_us}>
            <h1 className={MainCSS.about_title}>Benifits</h1>
          </div>
          <div className={MainCSS.mini_title}>
            <div className={MainCSS.block}>
              <h2 className={MainCSS.mtitle}>1000+ Users are Using Quizzify</h2>
              <p className={MainCSS.block_p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className={MainCSS.block}>
              <h2 className={MainCSS.mtitle}>
                Simple Design and Easy to Learning !
              </h2>
              <p className={MainCSS.block_p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className={MainCSS.block}>
              <h2 className={MainCSS.mtitle}>
                You Can Customized All the Things !
              </h2>
              <p className={MainCSS.block_p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className={MainCSS.block}>
              <h2 className={MainCSS.mtitle}>
                Highly Accurate and Protect Your Own Data
              </h2>
              <p className={MainCSS.block_p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div> */}

        {/* hi i am lahiru dilshan */}
      </div>
      <Footer />
    </div>
  );
}
