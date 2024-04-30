import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginCSS from './Login.module.css'

export default function Login() {

  const navigate = useNavigate()

  const [ data, setData ] = useState ({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password,
    });
    if (data.error) {
      toast.error(data.error)
    } else {
      setData({});
      navigate('/home')
      toast.success('🎊Login Successful. Welcome Back!🎈');
    }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className={LoginCSS.login_page}>
          <h1 className={LoginCSS.page_name}>LOGIN</h1>
          <form onSubmit={loginUser} className={LoginCSS.login_form}>
            
            <div className={LoginCSS.text_box}>
              <label>email</label>
              <input
              className={LoginCSS.input_box} 
              type="email" 
              placeholder='Enter Your Email'
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
              />
            </div>

            <div className={LoginCSS.text_box}>
              <label>password</label>
              <input 
              className={LoginCSS.input_box}
              type="password" 
              placeholder='Enter Your Password'
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}/>
            </div>
              
            <button type='submit' className={LoginCSS.login_button}> Login </button>

            <div className={LoginCSS.forget_password}>
              <h1 className={LoginCSS.ftext}> <a href="forget-password.html" className={LoginCSS.flink}>Forget Password ?</a></h1>
            </div>
                
            <div className={LoginCSS.sign_up_text}>
              <p className={LoginCSS.stext}>If You haven’t Register yet? <a href="./Register" className={LoginCSS.slink}>Register Now!</a></p>
            </div> 
          </form>
        </div>
      </div>
  )
}
