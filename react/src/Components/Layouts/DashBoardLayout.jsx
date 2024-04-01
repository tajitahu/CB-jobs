
import React,{useEffect,useRef  } from 'react';
import {useStateContext} from "../../Context/ContextProvider";

import $ from 'jquery';
import 'jquery-slimscroll';
import Logo from '../ui/logo';
import { NavLink, Navigate } from 'react-router-dom';
import { logoutUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
const DashBoardLayout = ({ children }) => {
    
   const {user, token, setUser, setToken, notification} = useStateContext();
   const dispatch = useDispatch();
   if (!token) {
     return <Navigate to="/login"/>
   }
   

   const handleLogout = () => {
      
      dispatch(logoutUser())
      .then((response) => {
       
          if (response.payload) {
            setUser(null);
            setToken(null);
         
          } else if (response.error) {
           alert('Logout Failed!')
          }
      });
   };

   // ...

   useEffect(() => {
      // Your code here
   }, []);
   useEffect(() => {
      // Your JavaScript code here
      $.pushMenu = {
          activate: function(toggleBtn) {
              //Enable sidebar toggle
              $(toggleBtn).on('click', function(e) {
                  e.preventDefault();
                  //Enable sidebar push menu
                  if ($(window).width() > 767) {
                      if ($("body").hasClass('sidebar-collapse')) {
                          $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                      } else {
                          $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                      }
                  }
                  //Handle sidebar push menu for small screens
                  else {
                      if ($("body").hasClass('sidebar-open')) {
                          $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                      } else {
                          $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                      }
                  }
                  if ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse')) {
                      $('.sidebar').css("overflow", "visible");
                      $('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
                  }
                  if ($('body').hasClass('only-sidebar')) {
                      $('.sidebar').css("overflow", "visible");
                      $('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
                  };
              });

              $(".content-wrapper").on('click', function() {
                  //Enable hide menu when clicking on the content-wrapper on small screens
                  if ($(window).width() <= 767 && $("body").hasClass("sidebar-open")) {
                      $("body").removeClass('sidebar-open');
                  }
              });
          }
      };

      $.tree = function(menu) {
          var _this = this;
          var animationSpeed = 200;
          $(document).on('click', menu + ' li a', function(e) {
              // Your treeview menu code here
          });
      };

      // Activate sidenav treemenu
      $.tree('.sidebar');
      $.pushMenu.activate("[data-toggle='offcanvas']");
  }, []);
    return (
        <div>
             <div class="loader-bg">
                <div class="loader-bar">
                </div>
            </div>
            <div class="wrapper">
      
      <header class="main-header-top hidden-print">
      <a href="index.html" class="logo"><img class="img-fluid able-logo"  src="/logos/logo2.png?cache_bust=123456" alt="Theme-logo" /></a>
        
         <nav class="navbar navbar-static-top">
           
            <a href="#!" data-toggle="offcanvas" class="sidebar-toggle" onClick={()=>window.activatePushMenu("[data-toggle='offcanvas']")}></a>
            <ul class="top-nav lft-nav">
               <li>
                  <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle drop icon-circle drop-image">
                     <i class="ti-files"> </i><span> Files</span>
                  </a>
               </li>               
               <li class="dropdown">
                  <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle drop icon-circle drop-image">
                     <span>Dropdown </span><i class=" icofont icofont-simple-down"></i>
                  </a>
                  <ul class="dropdown-menu settings-menu">
                     <li><a href="#">List item 1</a></li>
                     <li><a href="#">List item 2</a></li>
                     <li><a href="#">List item 3</a></li>
                     <li><a href="#">List item 4</a></li>
                     <li><a href="#">List item 5</a></li>
                  </ul>
               </li>
               <li class="dropdown pc-rheader-submenu message-notification search-toggle">
                  <a href="#!" id="morphsearch-search" class="drop icon-circle txt-white">
                     <i class="ti-search"></i>
                  </a>
               </li>
            </ul>
           
            <div class="navbar-custom-menu f-right">
              <div class="upgrade-button">
                <a href="#" class="icon-circle txt-white btn btn-sm btn-primary upgrade-button">
                    <span>Upgrade To Pro</span>
                </a>
              </div>

               <ul class="top-nav">
                  
                  <li class="dropdown notification-menu">
                     <a href="#!" data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle">
                        <i class="icon-bell"></i>
                        <span class="badge badge-danger header-badge">9</span>
                     </a>
                     <ul class="dropdown-menu">
                        <li class="not-head">You have <b class="text-primary">4</b> new notifications.</li>
                        <li class="bell-notification">
                           <a href="javascript:;" class="media">
                              <span class="media-left media-icon">
                    <img class="img-circle" src="assets/images/avatar-1.png" alt="User Image" />
                  </span>
                              <div class="media-body"><span class="block">Lisa sent you a mail</span><span class="text-muted block-time">2min ago</span></div>
                           </a>
                        </li>
                        <li class="bell-notification">
                           <a href="javascript:;" class="media">
                              <span class="media-left media-icon">
                    <img class="img-circle" src="assets/images/avatar-2.png" alt="User Image" />
                  </span>
                              <div class="media-body"><span class="block">Server Not Working</span><span class="text-muted block-time">20min ago</span></div>
                           </a>
                        </li>
                        <li class="bell-notification">
                           <a href="javascript:;" class="media"><span class="media-left media-icon">
                    <img class="img-circle" src="assets/assets/images/avatar-3.png" alt="User Image" />
                  </span>
                                    <div class="media-body"><span class="block">Transaction xyz complete</span><span class="text-muted block-time">3 hours ago</span></div></a>
                        </li>
                        <li class="not-footer">
                           <a href="#!">See all notifications.</a>
                        </li>
                     </ul>
                  </li>
                 
                  <li class="pc-rheader-submenu ">
                     <a href="#!" class="drop icon-circle displayChatbox" onClick={() => window.handleDisplayChatboxClick()}>
                        <i class="icon-bubbles"></i>
                        <span class="badge badge-danger header-badge">5</span>
                     </a>

                  </li>
                 
                  <li class="pc-rheader-submenu">
                     <a href="#!" class="drop icon-circle" onClick={() => window.toggleFullScreen()}>
                        <i class="icon-size-fullscreen"></i>
                     </a>

                  </li>
                 
                  <li class="dropdown">
                     <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle drop icon-circle drop-image">
                        <span><img class="img-circle " src="assets/assets/images/avatar-1.png" style={{width:"40px"}} alt="User Image" /></span>
                        <span>{user.usr_firstname} <b></b> <i class=" icofont icofont-simple-down"></i></span>
                        
                     </a>
                     <ul class="dropdown-menu settings-menu">
                        <li><a href="#!"><i class="icon-settings"></i> Settings</a></li>
                        <li><a href="#"><i class="icon-user"></i> Profile</a></li>
                        <li><a href="#"><i class="icon-envelope-open"></i> My Messages</a></li>
                        <li class="p-0">
                           <div class="dropdown-divider m-0"></div>
                        </li>
                        <li><a href="#"><i class="icon-lock"></i> Lock Screen</a></li>
                        <li><a onClick={handleLogout}><i class="icon-logout"></i> Logout</a></li>

                     </ul>
                  </li>
               </ul>

              
               <div id="morphsearch" class="morphsearch">
                  <form class="morphsearch-form">

                     <input class="morphsearch-input" type="search" placeholder="Search..." />

                     <button class="morphsearch-submit" type="submit">Search</button>

                  </form>
                  <div class="morphsearch-content">
                     <div class="dummy-column">
                        <h2>People</h2>
                        <a class="dummy-media-object" href="#!">
                           <img class="round" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" alt="Sara Soueidan" />
                           <h3>Sara Soueidan</h3>
                        </a>

                        <a class="dummy-media-object" href="#!">
                           <img class="round" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" alt="Shaun Dona" />
                           <h3>Shaun Dona</h3>
                        </a>
                     </div>
                     <div class="dummy-column">
                        <h2>Popular</h2>
                        <a class="dummy-media-object" href="#!">
                           <img src="assets/images/avatar-1.png" alt="PagePreloadingEffect" />
                           <h3>Page Preloading Effect</h3>
                        </a>

                        <a class="dummy-media-object" href="#!">
                           <img src="assets/images/avatar-1.png" alt="DraggableDualViewSlideshow" />
                           <h3>Draggable Dual-View Slideshow</h3>
                        </a>
                     </div>
                     <div class="dummy-column">
                        <h2>Recent</h2>
                        <a class="dummy-media-object" href="#!">
                           <img src="assets/images/avatar-1.png" alt="TooltipStylesInspiration" />
                           <h3>Tooltip Styles Inspiration</h3>
                        </a>
                        <a class="dummy-media-object" href="#!">
                           <img src="assets/assets/images/avatar-1.png" alt="NotificationStyles" />
                           <h3>Notification Styles Inspiration</h3>
                        </a>
                     </div>
                  </div>
                 
                  <span class="morphsearch-close"><i class="icofont icofont-search-alt-1"></i></span>
               </div>
              
            </div>
         </nav>
      </header>
     
      <aside class="main-sidebar hidden-print ">
         <section class="sidebar" id="sidebar-scroll">
            
            <ul class="sidebar-menu">
                <li class="nav-level">--- Navigation</li>
               
                <li class="active treeview">
                 <NavLink to="/dashboard">
                  <a class="waves-effect waves-dark">
                        <i class="icon-speedometer"></i><span> Dashboard</span>
                  </a>
                  </NavLink>          
                </li>
                
               {user.usr_type === 'employee' && (<li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-briefcase"></i><span> EMPLOYERS</span><i class="icon-arrow-down"></i></a>
                    <ul class="treeview-menu">
                        <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Listing</a></li>
                        <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Proposals</a></li>
                        <li><a class="waves-effect waves-dark" href="l#"><i class="icon-arrow-right"></i> Subscribe</a></li>
                        
                    </ul>
                </li>)}
                
               {user.user_type==='agent' && (
                  <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-chart"></i><span>  JOBSCENTER AFRICA</span><span class="label label-success menu-caption">New</span><i class="icon-arrow-down"></i></a>
                     <ul class="treeview-menu">
                         <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Listing</a></li>
                         <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Proposals</a></li>
                         <li><a class="waves-effect waves-dark" href="l#"><i class="icon-arrow-right"></i> Subscribe</a></li>
                         
                     </ul>
                 </li>
               )}
                
               {user.user_type==='job-seeker' && (
                  <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-book-open"></i><span> JOB SEEKER</span><i class="icon-arrow-down"></i></a>
                  <ul class="treeview-menu">
                      <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Jobs</a></li>
                      <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Proposals</a></li>
                      <li><a class="waves-effect waves-dark" href="l#"><i class="icon-arrow-right"></i> Subscribe</a></li>
                      
                  </ul>
              </li>
               )}
                {user.usr_type === 'training-provider' && ( 
                     <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-book-open"></i><span> TRAINING PROVIDER</span><i class="icon-arrow-down"></i></a>
                     <ul class="treeview-menu">
                         <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> List Cources</a></li>
                         <li><a class="waves-effect waves-dark" href="#"><i class="icon-arrow-right"></i> Proposals</a></li>
                         <li><a class="waves-effect waves-dark" href="l#"><i class="icon-arrow-right"></i> Subscribe</a></li>
                         
                     </ul>
                 </li>
                )}
                
                
                



                <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-docs"></i><span>Pages</span><i class="icon-arrow-down"></i></a>
                    <ul class="treeview-menu">
                        <li class="treeview"><a href="#!"><i class="icon-arrow-right"></i><span> Authentication</span><i class="icon-arrow-down"></i></a>
                            <ul class="treeview-menu">
                                <li><a class="waves-effect waves-dark" href="register1.html" target="_blank"><i class="icon-arrow-right"></i> Register 1</a></li>
                                
                                <li><a class="waves-effect waves-dark" href="login1.html" target="_blank"><i class="icon-arrow-right"></i><span> Login 1</span></a></li>
                                <li><a class="waves-effect waves-dark" href="forgot-password.html" target="_blank"><i class="icon-arrow-right"></i><span> Forgot Password</span></a></li>
                                
                            </ul>
                        </li>
                        
                        <li><a class="waves-effect waves-dark" href="404.html" target="_blank"><i class="icon-arrow-right"></i> Error 404</a></li>
                        <li><a class="waves-effect waves-dark" href="sample-page.html"><i class="icon-arrow-right"></i> Sample Page</a></li>
                        
                    </ul>
                </li>


            </ul>
         </section>
      </aside>
      
      <div id="sidebar" class="p-fixed header-users showChat">
         <div class="had-container">
            <div class="card card_main header-users-main">
               <div class="card-content user-box">
                  <div class="md-group-add-on p-20">
                     <span class="md-add-on">
                                    <i class="icofont icofont-search-alt-2 chat-search"></i>
                                 </span>
                     <div class="md-input-wrapper">
                        <input type="text" class="md-form-control" name="username" id="search-friends" />
                        <label>Search</label>
                     </div>

                  </div>
                  <div class="media friendlist-main">

                     <h6>Friend List</h6>

                  </div>
                  <div class="main-friend-list">
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-2.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Alice</div>
                           <span>1 hour ago</span>
                        </div>
                     </div>
                     <div  onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="7" data-status="offline" data-username="Michael Scofield" data-toggle="tooltip" data-placement="left" title="Michael Scofield">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-3.png" alt="Generic placeholder image" />
                           <div class="live-status bg-danger"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Michael Scofield</div>
                           <span>3 hours ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="5" data-status="online" data-username="Irina Shayk" data-toggle="tooltip" data-placement="left" title="Irina Shayk">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-4.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Irina Shayk</div>
                           <span>1 day ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="6" data-status="offline" data-username="Sara Tancredi" data-toggle="tooltip" data-placement="left" title="Sara Tancredi">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-5.png" alt="Generic placeholder image" />
                           <div class="live-status bg-danger"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Sara Tancredi</div>
                           <span>2 days ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-2.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Alice</div>
                           <span>1 hour ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-2.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Alice</div>
                           <span>1 hour ago</span>
                        </div>
                     </div>
                     <div  onClick={()=>window.toggleShowChatInner()}class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-2.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Alice</div>
                           <span>1 hour ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                     <div onClick={()=>window.toggleShowChatInner()} class="media friendlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">

                        <a class="media-left" href="#!">
                           <img class="media-object img-circle" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
                           <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                           <div class="friend-header">Josephin Doe</div>
                           <span>20min ago</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
      <div class="showChat_inner">
         <div class="media chat-inner-header">
            <a class="back_chatBox" onClick={()=>window.toggleBackChatBox()}>
               <i class="icofont icofont-rounded-left"></i> Josephin Doe
            </a>
         </div>
         <div class="media chat-messages">
            <a class="media-left photo-table" href="#!">
               <img class="media-object img-circle m-t-5" src="assets/assets/images/avatar-1.png" alt="Generic placeholder image" />
               <div class="live-status bg-success"></div>
            </a>
            <div class="media-body chat-menu-content">
               <div class="">
                  <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                  <p class="chat-time">8:20 a.m.</p>
               </div>
            </div>
         </div>
         <div class="media chat-messages">
            <div class="media-body chat-menu-reply">
               <div class="">
                  <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                  <p class="chat-time">8:20 a.m.</p>
               </div>
            </div>
            <div class="media-right photo-table">
               <a href="#!">
                  <img class="media-object img-circle m-t-5" src="assets/assets/images/avatar-2.png" alt="Generic placeholder image" />
                  <div class="live-status bg-success"></div>
               </a>
            </div>
         </div>
         <div class="media chat-reply-box">
            <div class="md-input-wrapper">
               <input type="text" class="md-form-control" id="inputEmail" name="inputEmail" />
               <label>Share your thoughts</label>
               <span class="highlight"></span>
               <span class="bar"></span> <button type="button" class="chat-send waves-effect waves-light">
                     <i class="icofont icofont-location-arrow f-20 "></i>
                 </button>

               <button type="button" class="chat-send waves-effect waves-light">
                    <i class="icofont icofont-location-arrow f-20 "></i>
                </button>
            </div>

         </div>
      </div>
      
     { children }
</div>
        </div>
    );
};

export default DashBoardLayout;