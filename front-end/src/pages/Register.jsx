import axios from 'axios'
import {useState} from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import RegisterCSS from './CSS/Register.module.css'

export default function Register() {

  const navigate = useNavigate()

  const [ data, setData ] = useState ({
    name: '',
    email: '',
    mobile: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault();
  
    const { name, email, mobile, password } = data;
  
    try {
      const data = await axios.post('/register', {
        name, email, mobile, password,
      });
  
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          name: '',
          email: '',
          mobile: '',
          password: '',
        });
        toast.success('🎊Registration Successful. Welcome!🎈');
        navigate('/login');
      }
    } 
    catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } 
  }

  return (
    <div>
    <div className={RegisterCSS.r_page}>
      <div className={RegisterCSS.register_box}>
        <h1 className={RegisterCSS.register_page_name}>SIGN</h1>
      <form onSubmit={registerUser} className={RegisterCSS.reg_form}>
        
        <div className={RegisterCSS.reg_input_box}>
          <label className={RegisterCSS.reg_lable}>name</label>
          <input
          className={RegisterCSS.reg_input}
          type="text" 
          placeholder='Enter Your Name'
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
          />
        </div>
       
        <div className={RegisterCSS.reg_input_box}>
          <label className={RegisterCSS.reg_lable}>email</label>
          <input 
          className={RegisterCSS.reg_input}
          type="email" 
          placeholder='Enter Your Email'
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
          />
        </div>

        <div className={RegisterCSS.reg_input_box}>
          <label className={RegisterCSS.reg_lable}>mobile</label>
          <input
          className={RegisterCSS.reg_input}
          type="text" 
          placeholder='Enter Your Mobile Number'
          value={data.mobile}
          onChange={(e) => setData({...data, mobile: e.target.value})}
          />
        </div>

        <div className={RegisterCSS.reg_input_box}>
          <label className={RegisterCSS.reg_lable}>password</label>
          <input 
          className={RegisterCSS.reg_input}
          type="password" 
          placeholder='Enter Your Password'
          value={data.password}
          onChange={(e) => setData({...data, password: e.target.value})}
          />
        </div> 
          <button className={RegisterCSS.register_button} type='submit'>Register</button>
        <div className={RegisterCSS.lselection}>
          <p className={RegisterCSS.ltext}>If You Already Have an Account ? 
          <a href="./Login" className={RegisterCSS.llink}> Login Now! </a></p>
        </div>
      </form>
      </div>
    </div>
    </div>
    
  )
}
