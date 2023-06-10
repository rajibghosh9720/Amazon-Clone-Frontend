import React from "react";
import amazon from "./blacklogoamazon.png";
import { NavLink } from "react-router-dom";
import "./Sign.css";

const Sign_up = () => {
 

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={amazon} alt="amazon logo" />  
          </div>

          <div className="sign_form">
            <form>
              <h1>Sign-Up</h1>

              <div className="form_data">
                <label htmlFor="fname">Your name</label>
                <input type="text" name="fname" id="fname" />
              </div>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input type="number" name="mobile" id="mobile" />
              </div>

              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 6 characters"
                  
                />
              </div>

              <div className="form_data">
                <label htmlFor="">Password Again</label>
                <input type="password" name="cpassword" id="cpassword" />
              </div>

              <button className="signin_btn">Continue</button>

              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_up;
