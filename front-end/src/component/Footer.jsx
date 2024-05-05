function Footer() {

  const footer_bar = {
    display: 'flex',
    placeContent: 'center',
    height: '43px',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter: 'blur(5px)',
    alignItems: 'center',
  }

  const text_align = {
    textAlignt: 'center',
    backgroundColor: 'transparent'
  }
  
  const footer_text = {
    backgroundColor: 'transparent',
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '550',
  }
  
  /* Media Responsive design for 768px */
  
  // @media (max-width: 768px) {
  //   const footer_bar = {
  //     height: '30px'
  //   }
  
  //   const footer_text = {
  //     fontSize: '13px'
  //   }
  // }
  
  /* Media Responsive design for 368px */
  
  // @media (max-width: 450px) {
  //   const footer_bar = {
  //     height: '20px'
  //   }
  
  //   const footer_text = {
  //     fontSize: '10px'
  //   }
  // }
  

  return (
    <div>
      <div style={footer_bar}>
        <div style={text_align}>
          <h1 style={footer_text}>Quizzify - Quiz System Project © 2023. Design by Team 56</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
