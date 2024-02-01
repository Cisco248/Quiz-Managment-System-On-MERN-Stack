import Style from './Navibar.module.css'

export default function Navibar() {
  return (
    <div>
      <div className={Style.navibar_box}>
        <img className={Style.navibar_logo} src='./nav-logo.svg' alt="" />
        <div className={Style.navibar_text}>
          <div className={Style.text_align}>
              <h1><a href='/help' className={Style.help_text}>Help <img src='./help.svg' alt="" /></a></h1>
              <h1><a href='/contactUs' className={Style.contact_text}>Contact US <img src="./contact-us.svg" alt="" className={Style.help_icon} /></a></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
