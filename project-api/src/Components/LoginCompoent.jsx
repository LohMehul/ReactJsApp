import react, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardHeader,
//   MDBCol,
//   MDBCardBody,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsPane,
//   MDBTabsContent,
//   MDBIcon,
//   MDBCheckbox,
//   MDBInput,
//   MDBBtn,
//   MDBTextArea,
//   MDBNavbarLink,
// } from 'mdb-react-ui-kit';
// import RegistetComponent from "./RegistetComponent.jsx"
// import './../LoginRegistration.css';
import './../LoginRegistration.css';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from './../Hooks/customHook';
import axios from 'axios';


const LoginCompoent = () => {
  // const HooksData = CustomHook({}, { usernameError: "" });
  const navigate = useNavigate();
  const { handleChange, inp, errors } = CustomHook({ roll: 2 }, { usernameError: "" });
  console.log(handleChange);
  const [ActiveClass, setActiveClass] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const toggleForm = () => {
    setActiveClass(!ActiveClass);
  }
  const savedata = async (event) => {
    event.preventDefault();
    // console.log("save data", inp);
    // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
    // console.log(result);
    // })
    // axios.post("http://localhost:5000/users", {
    //   username: inp.username,
    //   password: inp.password
    // })
    // .then((response) => {
    //   console.log(response);
    // });
    try {
      const response = await axios.get(`http://localhost:5000/users?username=${inp.username}&password=${inp.password}`)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            console.log("server connected",response.data);
            console.log("server connected",response.data[0].role);
            if (response.data[0].role == 1) {
              navigate("/admindashboard")
            } else {
              navigate("/userdashboard")
            }
          } else {
            console.log("error while connecting to the server");
          }
        }).catch((error) => {
            console.log("inside catch",error);
            setErrorMsg(true)
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  const registration = (event) => {
    event.preventDefault();
    console.log("registration data", inp);
    // fetch("http://localhost/API/registration", {
    // fetch("http://localhost:5000/users", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   // mode: "no-cors", // no-cors, *cors, same-origin
    //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify("sting",inp)
    // }).then((res) => res.json()).then((result) => {
    //   console.log("result",result);
    //   navigate("/login");
    // })
    fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inp)
}).then(response =>{navigate("/login");console.log(response);})
   
// output: 200
    // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
    //   console.log(result);
    // })
  }
  return (
    <>
      <section>
        <div className={ActiveClass ? "container active" : "container"}>
          <Link className='position-absolute z-index-1 end-0 p-2' to="/"><i className='fa fa-home'></i></Link>
          <div className="user signinBx">
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
            <div className="formBx">
              <form method='post' onSubmit={savedata}>
                <h2>Sign In</h2>
                {JSON.stringify(inp)}
                {JSON.stringify(errors)}
                <input type="text" className='required' onBlur={handleChange} name="username" placeholder="Username" />
                {errors.usernameError ? <span>This field is Required</span> : <></>}
                <input type="password" onBlur={handleChange} name="password" placeholder="Password" />
                {errors.passwordError ? <span>This field is Required</span> : <></>}
                <input type="submit" name="" value="Login" />
                <p className="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>Sign Up.</a>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form method='post' onSubmit={registration}>
                <h2>Create an account</h2>
                <input type="text" onBlur={handleChange} name="username" placeholder="Username" />
                <input type="email" name="email" onBlur={handleChange} placeholder="Email Address" />
                <input type="password" name="password" onBlur={handleChange} placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign Up" />
                <p className="signup">
                  Already have an account ?
                {/* {JSON.stringify(inp)} */}
                  <a href="#" onClick={toggleForm}>Sign in.</a>
                </p>
              </form>
            </div>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
          </div>
        </div>
      </section>

      {/* <MDBContainer fluid className='mt-5'>
                <section>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6'>
                            <form>
                                <MDBInput className='mb-4' type='email' id='loginName' label='Email or username' />

                                <MDBInput className='mb-4' type='password' id='loginPassword' label='Password' />

                                <MDBRow className='mb-4'>
                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Remember me' />
                                    </MDBCol>

                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <a href='#!'>Forgot password?</a>
                                    </MDBCol>
                                </MDBRow>

                                <MDBBtn type='submit' block className='mb-4'>
                                    Sign in
                                </MDBBtn>

                                <div className='text-center'>
                                    <p>
                                        Not a member? <a href="#">Register</a>
                                    </p>
                                    <p>or sign up with:</p>
                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='github' />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer> */}
    </>
  );
};

export default LoginCompoent;