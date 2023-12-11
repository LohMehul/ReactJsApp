import React from 'react';
import logo from '../assets/img.jpeg';

const Contact = () => {
  
    return (
      <div style={{margin:'99px', color:'Highlight'}}>
        <form style={{ border: '1px solid black', width: '300px', textAlign:'center', margin:'0 auto ', backgroundColor:'ButtonFace'}}>
          <div style={{padding:'20px'}}>
            <label style={{ border: '1px solid black', padding: "10px", width:'200px'}}>
              First Name:
             <label> Swati Patel</label>
            </label>
          </div>
          <div style={{padding:'0 10px '}}>
            <label style={{ border: '1px solid black', padding: "10px", width:'200px'}}>
             Education:
             <label> BCA </label>
            </label>
          </div>
          <div style={{padding:'20px '}}>
            <label style={{ border: '1px solid black', padding: "10px", width:'200px'}}>
              Date of Birth:
              <label>22/4/1995</label>
            </label>
          </div>
          <div style={{padding:'0 20px 20px'}}>
            <label style={{ border: '1px solid black', padding: "10px", width:'200px'}}>
              Image:
              <img src={logo} width="50" height="50" />
            </label>
          </div>
        </form>
      </div>
    );
  }


export default Contact;
