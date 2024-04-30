import Style from './Help.module.css'

function Help() {
  return (
    <div>
      <div className={Style.main_style}>
        <div className={Style.help_section}>
            <div className={Style.box_align}>
                <div className={Style.main_align1}>
                    <div className={Style.box1}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Sign</h1>
                                <p>How Signup Quizzify Website and Navigate Process Here.</p>
                            </div>
                        </a>
                    </div>
                    <div className={Style.box2}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Login</h1>
                                <p>How to Login Quizzify Website and Their Process.</p>
                            </div>
                        </a>
                    </div>
                    <div className={Style.box3}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Account</h1>
                                <p>Update Your Account Information and Mange Your Subscription.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={Style.main_align2}>
                    <div className={Style.box4}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Add Quiz</h1>
                                <p> How Add Quiz and it`s Works.</p>
                            </div>
                        </a>
                    </div>
                    <div className={Style.box5}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Play Quiz</h1>
                                <p>How to Play Quiz and Their Process.</p>
                            </div>
                        </a>
                    </div>
                    <div className={Style.box6}>
                        <a className={Style.box_link} href="/maintaince">
                            <div className={Style.box_text}>
                                <h1>Contact Us</h1>
                                <p>How to Contact Us</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={Style.comment_form}>
            <input className={Style.input_box} type="text" placeholder='Comment Here' />
            <button className={Style.comment_button}>Submit</button>
        </div>
        <div className={Style.Text}>
            <h5 className={Style.text_style}>011 - 123456789</h5>
            <h5 className={Style.text_style}>www.Quizzify.lk</h5>
            <h5 className={Style.text_style}>No:120, Infront of Juwelary, Maharagama</h5>
        </div>
      </div>
    </div>
  )
}

export default Help
