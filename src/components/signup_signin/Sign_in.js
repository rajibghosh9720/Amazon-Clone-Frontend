import React from "react";
import "./Sign.css";
import amazon from "./blacklogoamazon.png";
import { NavLink } from "react-router-dom";

const Sign_in = () => {

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={amazon} alt="amazon logo" />
          </div>

          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                 
                />
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
              <button className="signin_btn">Continue</button>
            </form>
          </div>

          <div className="create_accountinfo">
            <p>New to amazon</p>
            <NavLink to="/register">
              <button>Create Your Amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
