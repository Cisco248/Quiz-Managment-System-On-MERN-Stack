import "./Library.css";

export const Library = ({ className, ...props }) => {
  return (
    <div className={"library " + className}>
      <div className="library2">
        <div className="explore-your-interest">Explore Your Interest </div>
        <div className="tags">
          <div className="science">
            <div className="rectangle-2"></div>
            <div className="science2">Science </div>
          </div>
          <div className="maths">
            <div className="rectangle-22"></div>
            <div className="maths2">Maths </div>
          </div>
          <div className="biology">
            <div className="rectangle-23"></div>
            <div className="biology2">Biology </div>
          </div>
          <div className="technology">
            <div className="rectangle-24"></div>
            <div className="technology2">Technology </div>
          </div>
          <div className="music">
            <div className="rectangle-25"></div>
            <div className="music2">
              Music
              <br />{" "}
            </div>
          </div>
          <div className="social-science">
            <div className="rectangle-26"></div>
            <div className="social-studies">Social Studies </div>
          </div>
          <div className="economics">
            <div className="rectangle-4"></div>
            <div className="economics2">Economics </div>
          </div>
        </div>
        <div className="search-line">
          <div className="search-bar">
            <svg
              className="search-button"
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25.836" cy="25" r="25" fill="#5297FF" />
              <path
                d="M23.836 13C18.325 13 13.836 17.489 13.836 23C13.836 28.511 18.325 33 23.836 33C26.2325 33 28.4334 32.149 30.1583 30.7363L36.129 36.707C36.2211 36.803 36.3315 36.8796 36.4536 36.9324C36.5757 36.9852 36.7072 37.0131 36.8402 37.0144C36.9733 37.0158 37.1052 36.9906 37.2284 36.9403C37.3516 36.89 37.4635 36.8156 37.5576 36.7216C37.6516 36.6275 37.726 36.5156 37.7763 36.3924C37.8266 36.2692 37.8518 36.1373 37.8504 36.0042C37.8491 35.8712 37.8212 35.7397 37.7684 35.6176C37.7156 35.4955 37.639 35.3851 37.543 35.293L31.5723 29.3223C32.985 27.5974 33.836 25.3965 33.836 23C33.836 17.489 29.347 13 23.836 13ZM23.836 15C28.2661 15 31.836 18.5699 31.836 23C31.836 27.4301 28.2661 31 23.836 31C19.4059 31 15.836 27.4301 15.836 23C15.836 18.5699 19.4059 15 23.836 15Z"
                fill="black"
              />
            </svg>
            <div className="rectangle-27"></div>
            <div className="search-your-interest">Search Your Interest </div>
          </div>
          <div className="search-results">Search Results </div>
        </div>
        <div className="save-selected-quizzes">Save Selected Quizzes: </div>
        <div className="button">
          <div className="button2"></div>
          <div className="save">Save </div>
        </div>
        <div className="frame-41">
          <div className="_1">
            <div className="rectangle-9"></div>
            <img className="image-22" src="image-220.png" />
            <div className="text-bar">
              <div className="rectangle-66"></div>
            </div>
            <div className="text">
              <div className="linear-algebra">Linear Algebra </div>
              <div className="create-by-adi">Create By : Adi </div>
            </div>
          </div>
          <div className="_2">
            <div className="rectangle-10"></div>
            <img className="image-23" src="image-230.png" />
            <div className="text-bar2">
              <div className="rectangle-66"></div>
            </div>
            <div className="text2">
              <div className="linear-algebra">Natural Fuel </div>
              <div className="create-by-adi">Create By : Pasi </div>
            </div>
          </div>
          <div className="_3">
            <div className="rectangle-11"></div>
            <img className="image-24" src="image-240.png" />
            <div className="text-bar3">
              <div className="rectangle-66"></div>
            </div>
            <div className="text3">
              <div className="linear-algebra">Malware </div>
              <div className="create-by-adi">Create By : Ishitha </div>
            </div>
          </div>
          <div className="_4">
            <div className="rectangle-92"></div>
            <img className="image-25" src="image-250.png" />
            <div className="text-bar4">
              <div className="rectangle-66"></div>
            </div>
            <div className="text4">
              <div className="linear-algebra">Basic Guitar </div>
              <div className="create-by-adi">Create By : Lahiru </div>
            </div>
          </div>
          <div className="_5">
            <div className="rectangle-102"></div>
            <img className="image-26" src="image-260.png" />
            <div className="text-bar5">
              <div className="rectangle-66"></div>
            </div>
            <div className="text5">
              <div className="linear-algebra">Animals </div>
              <div className="create-by-adi">Create By : Lakshan </div>
            </div>
          </div>
          <div className="_6">
            <div className="rectangle-112"></div>
            <img className="image-27" src="image-270.png" />
            <div className="text-bar6">
              <div className="rectangle-66"></div>
            </div>
            <div className="text6">
              <div className="linear-algebra">World Trade Center </div>
              <div className="create-by-adi">Create By : xlk </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="navigation-bar">
          <div className="nav-logo">
            <svg
              className="logo-vectet"
              width="60"
              height="50"
              viewBox="0 0 60 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.6438 34.6336L37.0128 27.5333C37.8187 22.9672 37.0953 20.7269 35.5996 17.1477C34.246 14.7655 33.3419 13.5657 31.1718 11.9549C27.6759 9.71422 25.0152 9.1603 21.5623 9.72947C17.2047 10.8745 15.2849 12.4418 12.895 15.6641C10.9452 19.0721 10.2755 21.2133 10.3513 25.5198C10.6324 28.5632 11.2185 30.1676 12.8008 32.832C14.8549 35.8594 16.4278 37.1332 20.055 38.5547C22.6938 39.3664 24.268 39.3657 27.215 38.6607L33.998 45.655C30.6874 47.3804 28.6675 47.9336 24.6713 48.3044C20.8586 48.3335 18.8556 47.9883 15.4387 46.9267C11.7387 45.3138 10.0274 44.1294 7.33664 41.7339C3.74264 37.7687 2.18951 35.3342 0.741942 30.3946C-0.524799 23.79 -0.2031 20.2971 1.96667 14.3924C4.05386 10.132 5.55734 8.09742 8.93821 5.17254C12.5242 2.54827 14.6481 1.39347 18.8303 0.403661C24.5718 -0.415346 27.6759 -0.0542784 33.056 2.09926C37.3403 4.27729 39.1564 5.87427 41.8175 9.09362C44.8579 13.599 46.0899 16.308 46.8106 21.7047C47.042 27.1282 46.5432 29.9512 44.6438 34.6336Z"
                fill="#F9DB24"
              />
              <path
                d="M42.6654 50L23.4465 31.9842C24.1774 30.9798 24.8141 30.4777 25.8018 29.7588C27.0418 29.066 27.7402 28.7675 29.0049 28.4871C30.5295 28.32 31.3246 28.3644 32.5849 28.699C34.0351 29.0966 34.8134 29.4947 36.0707 30.5006L37.0128 31.4544L44.6438 38.1308L60 29.5468L42.6654 50Z"
                fill="#F9DB24"
              />
            </svg>
            <div className="quizzify">QUIZZIFY </div>
          </div>
        </div>
        <div className="icon">
          <svg
            className="vector2"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0C11.2147 0 0 11.2147 0 25C0 38.7853 11.2147 50 25 50C38.7853 50 50 38.7853 50 25C50 11.2147 38.7824 0 25 0ZM3.01471 26.4706H11.6529C11.7824 29.4824 12.2735 32.4441 13.1618 35.2941H5.50588C4.09118 32.6294 3.22353 29.6382 3.01471 26.4706ZM11.6529 23.5294H3.01471C3.22353 20.3618 4.09118 17.3706 5.50588 14.7059H13.1529C12.2676 17.5559 11.7794 20.5176 11.6529 23.5294ZM16.2676 14.7059H33.6088C34.5794 17.5441 35.1441 20.5059 35.2824 23.5294H14.5941C14.7294 20.5059 15.2971 17.5441 16.2676 14.7059ZM14.5941 26.4706H35.2853C35.1412 29.4941 34.5765 32.4559 33.6029 35.2941H16.2765C15.3029 32.4559 14.7353 29.4941 14.5941 26.4706ZM38.2265 26.4706H46.9853C46.7765 29.6382 45.9088 32.6294 44.4941 35.2941H36.7176C37.6059 32.4441 38.0971 29.4824 38.2265 26.4706ZM38.2265 23.5294C38.1 20.5176 37.6118 17.5559 36.7265 14.7059H44.4941C45.9059 17.3706 46.7735 20.3618 46.9853 23.5294H38.2265ZM42.6059 11.7647H35.6824C34.5294 8.95588 32.9882 6.3 31.1235 3.82353C35.7647 5.16765 39.7647 8 42.6059 11.7647ZM26.6412 3.02353C29.0647 5.66176 31.0059 8.61176 32.4412 11.7647H17.4353C18.8676 8.61471 20.8059 5.66765 23.2294 3.02941C23.8147 2.98529 24.4 2.94118 25 2.94118C25.5529 2.94118 26.0971 2.98529 26.6412 3.02353ZM18.7265 3.86176C16.8765 6.32647 15.3412 8.97059 14.1971 11.7647H7.39118C10.2 8.03824 14.1471 5.22353 18.7265 3.86176ZM7.39118 38.2353H14.2059C15.3559 41.0324 16.8971 43.6794 18.7559 46.1441C14.1647 44.7882 10.2059 41.9706 7.39118 38.2353ZM23.2647 46.9706C20.8353 44.3324 18.8882 41.3853 17.4471 38.2353H32.4294C30.9882 41.3882 29.0412 44.3382 26.6088 46.9765C26.0765 47.0147 25.5412 47.0588 25 47.0588C24.4118 47.0588 23.8382 47.0147 23.2647 46.9706ZM31.0912 46.1853C32.9618 43.7088 34.5147 41.0471 35.6706 38.2353H42.6059C39.7588 42.0088 35.7471 44.8441 31.0912 46.1853Z"
              fill="#949494"
            />
          </svg>
          <svg
            className="notification-icon"
            width="40"
            height="46"
            viewBox="0 0 40 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.21411 22.3017C3.88267 12.9514 10.9435 5.08715 20.0014 4.71796C29.0595 5.08715 36.1204 12.9514 35.789 22.3017C35.789 26.1852 39.8772 29.9685 39.997 33.861C39.997 33.9161 39.997 33.971 39.997 34.0261C40.0855 36.5199 38.202 38.6171 35.786 38.7147H26.6667C26.6752 40.6255 25.9773 42.4679 24.7155 43.8663C23.5021 45.2262 21.7927 46 20.0014 46C18.2102 46 16.501 45.2262 15.2877 43.8663C14.0257 42.4679 13.3278 40.6255 13.3363 38.7147H4.21411C1.79823 38.6171 -0.0854698 36.5199 0.00299246 34.0261C0.00299246 33.971 0.00299246 33.9161 0.00299246 33.861C0.125855 29.9803 4.21411 26.1882 4.21411 22.3017Z"
              stroke="#949494"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="26.9762"
              x2="36.6993"
              y2="26.9762"
              stroke="#949494"
              strokeWidth="3"
            />
            <path
              d="M23.0714 7.62939e-06C23.0714 -1.3807 21.9521 -2.49999 20.5714 -2.49999C19.1907 -2.49999 18.0714 -1.3807 18.0714 7.62939e-06H23.0714ZM23.0714 4.71796V7.62939e-06H18.0714V4.71796H23.0714Z"
              fill="#949494"
            />
          </svg>
          <svg
            className="user-svgrepo-com-1"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 24.575C30.6644 24.575 35.2565 20.0064 35.2565 14.3708C35.2565 8.73527 30.6644 4.16675 25 4.16675C19.3355 4.16675 14.7436 8.73527 14.7436 14.3708C14.7436 20.0064 19.3355 24.575 25 24.575Z"
              fill="#949494"
            />
            <path
              d="M30.3419 28.8269H19.6581C13.4615 28.8269 8.33331 33.929 8.33331 40.0938C8.33331 41.5819 8.97433 42.8575 10.2564 43.4952C12.1795 44.5582 16.453 45.8336 25 45.8336C33.5471 45.8336 37.8204 44.5582 39.7435 43.4952C40.8119 42.8575 41.6666 41.5819 41.6666 40.0938C41.6666 33.7163 36.5385 28.8269 30.3419 28.8269Z"
              fill="#949494"
            />
          </svg>
        </div>
        <div className="search-bar2">
          <div className="ellipse-21"></div>
          <div className="rectangle-53"></div>
          <svg
            className="vector7"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.489 0 0 4.489 0 10C0 15.511 4.489 20 10 20C12.3965 20 14.5974 19.149 16.3223 17.7363L22.293 23.707C22.3851 23.803 22.4955 23.8796 22.6176 23.9324C22.7397 23.9852 22.8712 24.0131 23.0042 24.0144C23.1373 24.0158 23.2692 23.9906 23.3924 23.9403C23.5156 23.89 23.6275 23.8156 23.7216 23.7216C23.8156 23.6275 23.89 23.5156 23.9403 23.3924C23.9906 23.2692 24.0158 23.1373 24.0144 23.0042C24.0131 22.8712 23.9852 22.7397 23.9324 22.6176C23.8796 22.4955 23.803 22.3851 23.707 22.293L17.7363 16.3223C19.149 14.5974 20 12.3965 20 10C20 4.489 15.511 0 10 0ZM10 2C14.4301 2 18 5.56988 18 10C18 14.4301 14.4301 18 10 18C5.56988 18 2 14.4301 2 10C2 5.56988 5.56988 2 10 2Z"
              fill="black"
            />
          </svg>
          <div className="search-quizes">Search Quizes </div>
        </div>
      </div>
      <div className="copyright">
        <div className="quizzify-quiz-system-project-2023-design-by-team-56">
          Quizzify - Quiz System Project © 2023. Design by Team 56{" "}
        </div>
      </div>
      <svg
        className="nav-bar-icon"
        width="30"
        height="50"
        viewBox="0 0 30 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 9V11H30V9H0ZM0 24V26H30V24H0ZM0 39V41H30V39H0Z"
          fill="white"
        />
      </svg>
      <div className="icons-8-web-64-2"></div>
    </div>
  );
};
