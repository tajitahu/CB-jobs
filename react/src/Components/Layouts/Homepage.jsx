import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import RegistrationModal from '../../Containers/modals/RegistrationModal.jsx';
import { Link } from 'react-router-dom';

export default function HomePageLayout(){

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false); 
    };

    return (<div>
    <header class="home-header" >
    <div class="def-width flex">
        <div class="logo repaint">
            <Link to="/">
                <img src="./logos/logo.png" style={{width:"100px"}} />
            </Link>
        </div>

        <div class="nav-toggler show-in-mob">
            <span class="nav-lines"></span>
        </div>

        <nav class="main-nav" id="main-nav">
            <ul>
            <Link to="/login">
                <li class="show-in-mob login login-js">Login</li>
            </Link> 
            </ul> 
            <div class="banner">
                <div class="banner-title">Change your career <span class="broke-row"></span> Change your life</div>
                <p>Make 2024 the Year You Get the Job <span class="broke-row"></span> You've Always Wanted</p>
                <div class="home__lid-butn">
                    <span class="relative">
                    <a href="/signup" class="butn butn-yellow">
                        <span class="showed-text">join us</span>
                    </a>
                        <img src="assets/images/pencil.png" alt="" class="pencil-bunner" />
                    </span>
                </div>
            </div>
        </nav>
        <div class="login__info">
            <div class="login repaint flex">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="23" height="18" viewBox="0 0 23 18" style={{enableBackground:"new 0 0 23 18"}} xml:space="preserve"><g><g><path class="st0" d="M21.6,8.6h-5.8c-0.4,0-0.8-0.4-0.8-0.8S15.3,7,15.8,7h5.8c0.4,0,0.8,0.4,0.8,0.8S22,8.6,21.6,8.6z"/>
                            <path class="st0" d="M18.7,11.5c-0.4,0-0.8-0.4-0.8-0.8V4.9c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v5.8C19.5,11.1,19.1,11.5,18.7,11.5z"/></g><g><path class="st0" d="M1.4,18c-0.4,0-0.8-0.4-0.8-0.8v-1.9c0-1,0.5-1.9,1.3-2.4l3.9-2.5l0-1.7c0-0.2-0.1-0.3-0.2-0.4C5.4,7.9,5.2,7.3,5.2,6.8V4c0-2.2,1.8-4,4-4C9.6,0,10,0.4,10,0.8S9.6,1.6,9.2,1.6C7.9,1.6,6.8,2.7,6.8,4v2.8c0,0.2,0.1,0.3,0.2,0.4c0.3,0.4,0.5,0.9,0.5,1.4v1.7c0,0.6-0.3,1.1-0.8,1.4l-3.9,2.5c-0.4,0.2-0.6,0.7-0.6,1.1v1.9C2.2,17.6,1.9,18,1.4,18z"/>
                            <path class="st0" d="M17,18c-0.4,0-0.8-0.4-0.8-0.8v-1.9c0-0.4-0.2-0.9-0.6-1.1l-3.9-2.5c-0.5-0.3-0.8-0.8-0.8-1.4V8.7c0-0.5,0.2-1,0.5-1.4c0.1-0.1,0.2-0.3,0.2-0.4V4c0-1.3-1.1-2.4-2.4-2.4c-0.4,0-0.8-0.4-0.8-0.8S8.8,0,9.2,0c2.2,0,4,1.8,4,4v2.8c0,0.5-0.2,1-0.5,1.4c-0.1,0.1-0.2,0.3-0.2,0.4v1.7l3.9,2.6c0.8,0.5,1.3,1.4,1.3,2.4v1.9C17.8,17.6,17.4,18,17,18z" fill="#000"/></g></g>
                </svg>
                <Link to="/signup/agent">Register</Link>
            </div>
            <div class="login login-js repaint flex">
            <Link to="/login">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="14" height="18" viewBox="0 0 14 18" style={{enableBackground:"new 0 0 14 18"}} xml:space="preserve"><g><path class="st0" d="M8.3,18H1.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8h7.1c2.1,0,3.8-1.7,3.8-3.8V5.4c0-2.1-1.7-3.8-3.8-3.8H1.1 c-0.4,0-0.8-0.4-0.8-0.8S0.7,0,1.1,0h7.1c3,0,5.4,2.4,5.4,5.4v7.1C13.7,15.5,11.2,18,8.3,18z"/>
                        <path class="st0" d="M7.9,9.8H1.1C0.7,9.8,0.3,9.4,0.3,9s0.4-0.8,0.8-0.8h6.8c0.4,0,0.8,0.4,0.8,0.8S8.3,9.8,7.9,9.8z"/><g>
                        <path class="st0" d="M7.9,9.8c-0.2,0-0.5-0.1-0.6-0.3L4.5,5.8C4.2,5.5,4.3,5,4.6,4.7C5,4.4,5.5,4.5,5.7,4.9l2.8,3.7c0.3,0.4,0.2,0.9-0.1,1.1C8.2,9.7,8.1,9.8,7.9,9.8z"/><path class="st0" d="M5.1,13.5c-0.2,0-0.3-0.1-0.5-0.2c-0.4-0.3-0.4-0.8-0.1-1.1l2.8-3.7C7.5,8.2,8,8.1,8.4,8.4c0.4,0.3,0.4,0.8,0.1,1.1l-2.8,3.7C5.6,13.3,5.3,13.5,5.1,13.5z" fill="#000"/></g></g>
                </svg>
                Login
            </Link>
            </div>
        </div>
    </div>

    <div class="modal-wrapper login-modal__closer ">
    <span class="login-modal__closer up-wrapper"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.851px" height="14.851px" viewBox="0 0 14.851 14.851" enable-background="new 0 0 14.851 14.851" xml:space="preserve">
                        <path fill="#FFFFFF" d="M14.851,1.415L8.839,7.425l6.011,6.011l-1.414,1.414L7.425,8.84l-6.011,6.011L0,13.437l6.011-6.011L0,1.415
                       L1.414,0l6.011,6.011L13.436,0L14.851,1.415z"></path>
                     </svg></span>
    </div>
        <div class="login-modal">
        <div class="login-modal__head">
            <p>Log in to your account</p>
        </div>
        <div class="login-modal__content">
    <form name="login" method="post" action="/login" class="">
    
     <div id="login" class="">    <div class="login-form__row">
        <div class="login-form__control ">
            
            <input type="email" id="login_email" name="email" class="full-width" placeholder="Email" />
        </div>
    </div>
    <div class="login-form__row">
        <div class="login-form__control ">
             
            <input type="password" id="login_password" name="password" class="full-width" placeholder="Password" />
        </div>
    </div>
<div><div class="login-form__row login-form__bottom">
        <div class="flex">
            <a href="/password-request">Forgot password?</a>
        </div>
        <button type="submit" id="login_submit" name="login[submit]" class="butn butn-green">
        <span class="showed-text">Login</span>
    </button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
</div></div>
</form>
                    </div>
    </div>
</header>

<Outlet />
<RegistrationModal open={modalOpen} onClose={handleCloseModal} />

<footer >
    <div class="def-width text-center">
        <div class="footer-first_links">
            <a href="/pricing" >Pricing</a>
            <a href="/faq" >FAQ</a>
            <a href="/terms-of-use" >Terms of Use</a>
            <a href="/contact-us" >Contact Us</a>
            <a href="/jobs-for-writers" >Jobs for writers</a>
            <a href="/writing-for-money" >Writing for money</a>
        </div>
        
     

        <div class="footer-copyright-wrap">
            <ul class="soc-icons flex">
                <li class="soc-icons__circle">
                    <a href="https://twitter.com/prowriterstime" target="_blank" rel="nofollow"><img src="assets/images/svg/soc1.svg" alt="Twitter" /></a>
                </li>
                <li class="soc-icons__circle">
                    <a href="https://www.facebook.com/Prowriterstimecom-461561537567126/" target="_blank" rel="nofollow"><img src="assets/images/svg/soc2.svg" alt="Facebook" /></a>
                </li>
            </ul>
            <div class="copyright">
               
                © 2008-2023 AfricaJobsCenter.com
            </div>
        </div>
    </div>
                    <button type="button" id="back-top"></button>
</footer>
    
    </div>)
}