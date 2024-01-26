import FooterCSS from './Footer.module.css'

function Footer() {
  return (
    <div>
      <div className={FooterCSS.footer_bar}>
        <div className={FooterCSS.text_align}>
          <h1 className={FooterCSS.footer_text}>Quizzify - Quiz System Project © 2023. Design by Team 56</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
