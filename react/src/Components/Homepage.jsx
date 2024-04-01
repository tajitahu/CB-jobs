import React,{useState} from 'react';
import { useStateContext } from '../Context/ContextProvider';
import RegistrationModal from '../Containers/modals/RegistrationModal.jsx';
import { Link, NavLink } from 'react-router-dom';
import Slider from './slider.jsx';
import SearchForm from './searchform.jsx';
import CoursesSection from './coursesSection.jsx';
import CountersSection from './CounterSection.jsx';
import AcademicSection from './AcademicSection.jsx';
import PastPapersAndBooksSection from './PastPapersAndBooksSection.jsx';
import CourseDetails from './CourseDetails.jsx';
export default function HomePage(){

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };


    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
      setReadMore(!readMore); // Toggle readMore state
    };

    return (<>
<RegistrationModal open={modalOpen} onClose={handleCloseModal} />  
<main class="home">
    <section class="home__lid">
        <div class="def-width">
        
            <h1 >Welcome to Cambiz Jobs!</h1>
           
            <ul class="flex">
                <li><img src="assets/images/svg/l1.svg" width="40" height="40" alt="" />Create profile</li>
                <li><img src="assets/images/svg/l2.svg" width="40" height="40" alt="" />Get Hired</li>
                <li><img src="assets/images/svg/ic_start_earning.svg" width="40" height="40" alt="" />Start earning</li>
            </ul>
             <p class="banner-title">Change your career <span class="broke-row"></span> Change your life</p>
                <p>Make 2024 the Year You Get the Job <span class="broke-row"></span> You've Always Wanted</p>
            <div class="home__lid-butn">
                <a onClick={handleOpenModal} href="#" class="butn butn-yellow">
                    <span class="showed-text">register now</span>
                </a>
             <NavLink to="/signup/agent" className="jobcenter-african butn butn-yellow ml-2">Jobcenter Africa</NavLink>
            </div>
            <p style={{marginTop:"0px"}}><small>Join Cambiz Jobs today and experience a seamless and supportive platform for all your employment needs!</small></p>
            <SearchForm />
            <Slider />
            <span class="wheel_down"></span>
        </div>
    </section>
    <CoursesSection />
   
    <section class="bg-gray-900 p-5 home_career home__offer mt-5" style={{paddingLeft:"100px"}}>
        <div class="row">
            <div class="col-md-7">
                <div class="home_career_left_content ">
                    <h3 class="text-left font-semibold">Advance your career with CamBiz Jobs</h3>
                    <p class="mt-3 text-gray-400 text-lg">Create a free account, complete your profile,and get matched with your dream job.</p>
                    <div class="flex mt-5">
                     <button class="btn bg-brand-primary" onClick={handleOpenModal} >Get Started</button>
                     <button class="btn btn-transparent">Learn More <i class="fa fa-arrow"></i></button>
                </div>
                

                </div>
            <div class="row">
                <div class="col-md-6 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 40 40" fill="none" class="" role="presentation" aria-hidden="true">
                    <path d="M13.2 31.7V30.7C13.2 30 13.7 29.5 14.4 29.5H19.1H20.8H25.5C26.2 29.5 26.7 30 26.7 30.7V31.7" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M21.8999 24.7C21.8999 26 22.6999 26.9 23.7999 27.5C25.1999 28.2 25.2999 28.5 25.2999 29.2V29.5" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M14.7 29.5V29.2C14.7 28.5 14.8 28.2 16.2 27.5C17.3 27 18.1 26 18.1 24.8" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19.0999 31.7H12.8999C11.9999 31.7 11.2999 32.4 11.2999 33.3V34.3H19.0999H20.7999H28.5999V33.3C28.5999 32.4 27.8999 31.7 26.9999 31.7H20.7999H19.0999V31.7Z" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M20.8999 7.69999L22.8999 11.8C22.9999 12.1 23.2999 12.3 23.6999 12.4L28.1999 13.1C28.9999 13.2 29.3999 14.2 28.7999 14.8L25.4999 18C25.2999 18.2 25.1999 18.6 25.1999 18.9L25.9999 23.4C26.0999 24.2 25.2999 24.9 24.4999 24.5L20.4999 22.4C20.1999 22.2 19.8999 22.2 19.5999 22.4L15.5999 24.5C14.8999 24.9 13.9999 24.3 14.0999 23.4L14.8999 18.9C14.9999 18.6 14.7999 18.2 14.5999 18L11.2999 14.8C10.6999 14.2 10.9999 13.2 11.8999 13.1L16.3999 12.4C16.6999 12.4 16.9999 12.1 17.1999 11.8L19.1999 7.69999C19.4999 6.99999 20.4999 6.99999 20.8999 7.69999Z" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M26.2 10.2L27.5 10.3" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M23.7 7.00001L24.2 5.70001" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M25.7 8.10001L27.2 6.70001" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M13.8 10.2L12.5 10.3" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16.2999 7.00001L15.7999 5.70001" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M14.2999 8.10001L12.7999 6.70001" stroke="white" stroke-width="0.8929" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h6>Get seen by employers</h6>
                    <p class="text-lg text-gray-400">With a complete profile, your applications and profile are promoted to top employers, so you stand out.</p>
                </div>
                 <div class="col-md-6 mt-5">
                   <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 28 28" fill="none" class="" role="presentation" aria-hidden="true">
                    <path d="M6.29999 17.2C9.28233 17.2 11.7 14.7824 11.7 11.8C11.7 8.81769 9.28233 6.40002 6.29999 6.40002C3.31766 6.40002 0.899994 8.81769 0.899994 11.8C0.899994 14.7824 3.31766 17.2 6.29999 17.2Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.29999 14.2999V11.2" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.29999 9.39993V9.29993" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M21.5 0.599976C24.3 2.29998 26.4 4.89998 27.4 8.09998" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M21 3.79993C22.3 4.79993 23.3 6.09993 24 7.59993" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.49999 19C6.09999 19.7 5.69999 20.3 5.09999 20.8C4.59999 21.3 4.99999 22.3 5.69999 22.3H14.6H23.5C24.3 22.3 24.7 21.4 24.1 20.8C22.7 19.4 21.9 17.6 21.9 15.6V14.9V12.1C21.9 8.10002 18.8 4.70002 14.8 4.60002C13.2 4.50002 11.6 5.00002 10.4 5.90002" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12 22.2999C12 23.7999 13.2 25.0999 14.8 25.0999C16.3 25.0999 17.6 23.8999 17.6 22.2999" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M18.6 11C18.4 9.80002 17.5 8.80002 16.3 8.40002" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M17.8 27.2C18.8 26.6 19.6 25.7 20 24.6" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M11.7 27.2C10.7 26.6 9.9 25.7 9.5 24.6" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M15.9 4.7C16.4 4.3 16.8 3.7 16.8 3C16.8 1.9 15.9 1 14.8 1C13.7 1 12.8 1.9 12.8 3C12.8 3.7 13.2 4.3 13.7 4.7" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h6>Access the best jobs for you</h6>
                    <p class="text-lg text-gray-400">Sign up for customised job alerts matching your experience, preferred industry, function and location.</p>
                </div>
            </div>
            </div>
            <div class="col-md-5">
                <div class="img-frame mt-5 ml-3">
                    <img src="/assets/img/level-up-your-cv-game-banner.webp" />
                </div>
            </div>
        </div>
    </section>
   
    <CountersSection />
    <section class="home__currently mt-5">
        <div class="def-width">
            <div class="like-h1 flex"><img src=" assets/images/search_icon.png" width="61" height="61" class="retina" alt="" />Currently We are<span> in Search </span>of:</div>
            <ul>
                <li><img src=" assets/images/svg/check_icon.svg" alt="" /><strong>Native English speakers</strong> for orders that are  to be completed by writers whose First language is English.</li>
                <li><img src=" assets/images/svg/check_icon.svg" alt="" /><strong>Writers with English as the Second language.</strong> That would be a plus if you are proficient in the following industries:</li>
            </ul>
    
<div class="home__currently-content roll-up flex">
    <ul>
        <li><div><img src=" assets/images/svg/ic_search_english.svg" alt="" /></div>English 101</li>
        <li><div><img src=" assets/images/svg/ic_search_engeneer.svg" alt="" /></div>Engineering</li>
        <li><div><img src=" assets/images/svg/ic_search_statist.svg" alt="" /></div>Statistics</li>
        <li><div><img src=" assets/images/svg/ic_search_medicine.svg" alt="" /></div>Medicine</li>
    </ul>
    <ul>
        <li><div><img src=" assets/images/svg/ic_search_finance.svg" alt="" /></div>Finance</li>
        <li><div><img src=" assets/images/svg/ic_search_law.svg" alt="" /></div>Law</li>
        <li><div><img src=" assets/images/svg/ic_search_business.svg" alt="" /></div>Business Studies</li>
        <li><div><img src=" assets/images/svg/ic_search_history.svg" alt="" /></div>History</li>
    </ul>
    <ul>
        <li><div><img src=" assets/images/svg/ic_search_philos.svg" alt="" /></div>Philosophy</li>
        <li><div><img src=" assets/images/svg/ic_search_it.svg" alt="" /></div>IT, Web</li>
        <li><div><img src=" assets/images/svg/ic_search_phisics.svg" alt="" /></div>Physics</li>
        <li><div><img src=" assets/images/svg/ic_search_archi.svg" alt="" /></div>Architecture</li>
    </ul>
</div>
<span class="more-list show-in-mob">View all</span>
<div class="home__currently-butn">
    <a onclick="ga('gtm1.send','event','joinus','button');" href="#" class="butn butn-yellow">
        <span class="showed-text">Apply now</span>
    </a>
</div>        </div>
    </section>
    
<section class="home__register_now mt-5"   style={{backgroundImage: `url('./assets/images/img_cta@3x.png')`}}>
    <div class="inner">
        <div class="register_now_text">
            <span>Don't waste your time!</span>
            <span>Start your Journey to getting your Career Now</span>
        </div>
        <div class="register_now_btn">
            <div class="home__lid-butn">
                <a href="#" class="butn butn-yellow no-effect">
                    <span class="showed-text">register now</span>
                </a>
            </div>
        </div>
    </div>
</section> 
<AcademicSection />   
<PastPapersAndBooksSection />
  
</main>
<section class="newsletter mt-5">
    <div class="def-width">
        <div class="newsletter-inner-wrap">
            <div class="newsletter-inner">
                <div class="newsletter-left-col">
                    <div class="newsletter-form-title">
                        Register and get<br/> hired now!
                    </div>
                    <form class="send-mail">
                        <img src="assets/images/svg/envelope_yellow.svg" alt="" />
                        <input type="text" name="email" placeholder="Enter your Email and start earning" />
                        <NavLink to="/signup/job-seeker">
                            <button type="button" class="butn butn-yellow no-effect" >
                                <span class="showed-text">Start Registration</span>
                            </button>
                        </NavLink>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    </>)
}