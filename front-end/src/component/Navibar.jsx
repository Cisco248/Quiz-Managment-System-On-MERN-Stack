import Style from "./Navibar.module.css";

export default function Navibar() {
  return (
    <div>
      <div className={Style.navibar_box}>
        <div className={Style.logo}>
          <a className={Style.navibar_logo} href="/">
            <img
              className={Style.navibar_logo}
              src="./nav-logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className={Style.navibar_text}>
          <div className={Style.text_align}>
            <a href="/help" className={Style.help_text}>
              Help
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="help-outline-svgrepo-com 1">
                  <path
                    id="Vector"
                    d="M9.16666 15H10.8333V13.3333H9.16666V15ZM9.99999 1.66667C5.39999 1.66667 1.66666 5.40001 1.66666 10C1.66666 14.6 5.39999 18.3333 9.99999 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.40001 14.6 1.66667 9.99999 1.66667ZM9.99999 16.6667C6.32499 16.6667 3.33332 13.675 3.33332 10C3.33332 6.32501 6.32499 3.33334 9.99999 3.33334C13.675 3.33334 16.6667 6.32501 16.6667 10C16.6667 13.675 13.675 16.6667 9.99999 16.6667ZM9.99999 5.00001C8.15832 5.00001 6.66666 6.49167 6.66666 8.33334H8.33332C8.33332 7.41667 9.08332 6.66667 9.99999 6.66667C10.9167 6.66667 11.6667 7.41667 11.6667 8.33334C11.6667 10 9.16666 9.79167 9.16666 12.5H10.8333C10.8333 10.625 13.3333 10.4167 13.3333 8.33334C13.3333 6.49167 11.8417 5.00001 9.99999 5.00001Z"
                    fill="black"
                  />
                </g>
              </svg>
            </a>

            <a href="/contact" className={Style.contact_text}>
              Contact US
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="contact-us-filled-svgrepo-com 1">
                  <g id="Contact-Us-Filled">
                    <path
                      id="Vector"
                      d="M0.833313 0.833328V15H4.16665V18.3333L11.25 15H18.3333V0.833328H0.833313ZM6.66665 9.16666H4.16665V6.66666H6.66665V9.16666ZM10.8333 9.16666H8.33331V6.66666H10.8333V9.16666ZM15 9.16666H12.5V6.66666H15V9.16666Z"
                      fill="black"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
