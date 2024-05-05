import { NavLink } from 'react-router-dom';

const Navibar2 = () => {

  const navibar2_component = {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 100px',
    fontFamily: 'Poppins',
    background: 'rgba(255, 255, 255, 0.11)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter:' blur(5px)'
  }
  
  const navibar_align = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'center',
  }
  
  const navibar2_logo = {
    height: '30px',
    width: 'auto',
    filter: 'saturate(100%) invert(40%) sepia(30%) saturate(9000%) hue-rotate(300deg) brightness(200%) contrast(100%)'
  }
  
  const navibar2_list = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    gap: '30px',
  }
  
  const navi_bar_link_list = {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    listStyle: 'none',
    textDecoration: 'none',
  }
  
  const link = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
  }
  
  const link_list = {
    textDecoration: 'none',
    color: 'white',
  }
  

  return (
    <div>
      <div style={navibar2_component}>
        <div style={navibar_align}>
          <NavLink exact to={"/home"}><img style={navibar2_logo} src="./nav-logo.svg" alt="logo" /></NavLink>
        </div>
        <div style={navibar2_list}>
          <ul style={navi_bar_link_list}>
            <li style={link}><NavLink to={"/home"} style={link_list}>Home</NavLink></li>
            <li style={link}><NavLink to={"/createandplay"} style={link_list}>Create Quiz</NavLink></li>
            <li style={link}><NavLink to={"/library"} style={link_list}>Library</NavLink></li>
            {/* <li style={link}><NavLink to={"/maintaince"} style={link_list}>Discover</NavLink></li> */}
            <li style={link}><NavLink to={"/leaderboard"} style={link_list}>Leaderbord</NavLink></li>
            <li style={link}><NavLink to={"/analytics"} style={link_list}>Analytics</NavLink></li>
            <li style={link}><NavLink to={"/profile"} style={link_list}>Profile</NavLink></li>
            <li style={link}><NavLink to={"/help2"} style={link_list}>Help</NavLink></li>
            <li style={link}><NavLink to={"/contact2"} style={link_list}>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navibar2;
