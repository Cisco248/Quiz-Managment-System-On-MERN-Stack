import Style from './Contact2.module.css'

function Contact() {
  return (
    <div>
        <div className={Style.contact_page}>
            <div className={Style.page_title}>
                <h1 className={Style.title_name}>Contact US</h1>
            </div>
            <div className={Style.contact_section}>
                <div className={Style.contact_text_align}>
                    <h1 className={Style.contact_text}>Contact : <span className={Style.gold}>011 - 123456789</span></h1>
                    <h2 className={Style.contact_text}>Email : <span className={Style.gold}>quizzify@gmail.com</span></h2>
                    <h3 className={Style.contact_text}>Address : <span className={Style.gold}>No:120, Infront of Juwelery, Maharagama</span></h3>
                </div>
            </div>
            <div className={Style.social_icons}>
                <div className={Style.icon_align}>
                    <div className={Style.box}>
                        <img className={Style.icons} src="/facebook.svg" alt="" />
                        <a className={Style.link} href="/maintaince"> https://www.facebook.com/quizzify/ </a>
                    </div>
                    <div className={Style.box}>
                        <img className={Style.icons} src="/youtube.svg" alt="" />
                        <a className={Style.link} href="/maintaince"> http://www.youtube.com/watch?v=-wtIMTCHWuI</a>
                    </div>
                    <div className={Style.box}>
                        <img className={Style.icons} src="/twitter.svg" alt="" />
                        <a className={Style.link} href="/maintaince"> https://www.twitter.com/quizzify/ </a>
                    </div>
                    <div className={Style.box}>
                        <img className={Style.icons} src="/pintrest.svg" alt="" />
                        <a className={Style.link} href="/maintaince"> https://www.pinterest.com/quizzify/ </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
