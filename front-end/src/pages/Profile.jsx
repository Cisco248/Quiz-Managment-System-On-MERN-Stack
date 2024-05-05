import Style from './Profile.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

  const [ profile, setProfile ] = useState({});
  const [ uploading, setUploading ] = useState(false);
  const [ image, setImage ] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/profile', {
      headers: {
      Authorization: token
      }
    })
    .then(response => {
      setProfile(response.data);
    })
    .catch(error => {
      console.error('Error Fetching Profile: ', error)
    });
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async (res) => {
    if (!image) return;

    setUploading(true);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('image', image);
      await axios.post('/upload', formData, {
        headers: {
          Authorization: token
        }
      });
      setProfile(res.data);
    } catch (error) {
      console.error('Error Uploading Image: ', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
        <div className={Style.profile_page}>
            <div className={Style.page_name}>
                <div className={Style.page_name_text}>
                    <h1 className={Style.text}>Profile</h1>
                </div>
                <div className={Style.profile_section}>
                    <div className={Style.profile_detail}> 
                        {profile.profilePictureUrl ? ( <img src={profile.profilePictureUrl} alt="Profile" /> ) : ( <div>No profile picture uploaded</div> )}
                        <input type="file" accept='image/*' onChange={handleImageChange} />
                        <button onClick={handleImageUpload} disabled={uploading}>
                          { uploading ? 'Uploading...' : 'Upload Picture' }
                        </button>
                    </div>
                    <div className={Style.detail_box}>
                        <div className={Style.input_box}>
                          <h1 className={Style.input}>Name: {profile.name}</h1> 
                        </div>
                        <div className={Style.input_box}>
                          <strong className={Style.input}>Email: {profile.email}</strong> 
                        </div>
                        <div className={Style.input_box}>
                          <strong className={Style.input}>Mobile: {profile.mobile}</strong> 
                        </div>
                        <div className={Style.input_box}>
                          <strong className={Style.input}>Password: {profile.password}</strong> 
                        </div>
                    </div>
                </div>
                <div className={Style.button_container}>
                    <button className={Style.edit_button} type='submit'>Edit</button>
                    <button className={Style.delete_button} type='submit'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile