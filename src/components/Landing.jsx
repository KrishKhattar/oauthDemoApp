import React from 'react'
import { useNavigate } from 'react-router-dom';
import { sdk } from '../appwrite/Appwrite';

function Landing() {
    const currentURL = window.location.href;
    const successURL = currentURL + "success";
    const failureURL = currentURL + "failure";

    const navigate = useNavigate();

    const handleRegister = (platform) => {
        sdk.register(platform, successURL, failureURL);
    }

    return (
        <div className="u-main-center u-flex u-margin-32">
          <div className="u-margin-32">
            <p className="pb-4 heading-level-3 u-margin-32">WELCOME🤗</p>
            <button className="button u-margin-32" onClick={() => handleRegister('github')}>
              <span className="icon-github"></span>Continue with GitHub
            </button>
            <button className="button u-margin-32" onClick={() => handleRegister('google')}>
              <span className="icon-google"></span>Continue with Google
            </button>
          </div>
        </div>
      );
}

export default Landing