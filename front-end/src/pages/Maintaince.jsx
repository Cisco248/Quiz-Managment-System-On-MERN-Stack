import Style from './Maintaince.module.css'

function Mantaince() {
  return (
    <div>
      <div className={Style.maintaince_bg}>
        <div className={Style.style_align}>
          <img className={Style.img_style} src="./maintenance_icon.svg" alt="logo" />
          <div className={Style.text_box}>
            <h1 className={Style.maintainece_title}> Sorry! </h1>
            <p className={Style.maintaince_des}> Website Under Contruction! </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mantaince
