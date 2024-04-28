import Style from './Profile.module.css'
import Navibar2 from '../component/Navibar2'
import Footer from '../component/Footer'

function Profile() {

    

  return (
    <div>
        <Navibar2 />
        <div className={Style.profile_page}>
            <div className={Style.page_name}>
                <div className={Style.page_name_text}>
                    <h1 className={Style.text}>Profile</h1>
                </div>
                <div className={Style.profile_section}>
                    <div className={Style.profile_detail}>
                        <img className={Style.profile_img} type="upload" src="" alt="" />
                        
                    </div>
                    <form className={Style.detail_box} action="get">
                        <input className={Style.input_box} type="text" placeholder='Name'/>
                        <input className={Style.input_box} type="text" placeholder='Mobile Number'/>
                        <input className={Style.input_box} type="email" placeholder='Email'/>
                        <input className={Style.input_box} type="password" placeholder='Password'/>
                    </form>
                </div>
                <div className={Style.button_container}>
                    <button className={Style.edit_button}>Edit</button>
                    <button className={Style.delete_button}>Delete</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile