@extends('auth.layouts.index')
@section('content')
<div class="app-content content">
  <div class="content-wrapper">
    <div class="content-body">
      <section class="flexbox-container">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="col-md-5 box-shadow-2 p-0">
            <div class="card border-grey border-lighten-3 m-0">
              <div class="card-header border-0">
                <div class="card-title text-center">
                  <div class="p-1">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="45" viewBox="0 0 287 45">
                <g id="logo_white">
                <path id="Forma-1" d="M16.875,25.781 C16.875,25.781 25.837,20.404 30.883,22.528 C31.929,20.934 32.960,19.217 33.968,17.465 C29.032,16.255 22.500,17.344 22.500,17.344 C22.500,17.344 30.859,12.329 35.977,13.898 C37.003,12.048 38.000,10.223 38.963,8.524 C34.886,8.248 30.937,8.906 30.937,8.906 C30.937,8.906 36.174,5.765 40.895,5.232 C42.380,2.822 43.758,0.931 45.000,0.000 C20.347,0.000 5.625,28.125 0.000,45.000 C0.000,45.000 1.812,45.000 1.812,45.000 L11.250,30.937 C11.250,30.937 14.063,33.750 22.500,30.937 C24.498,30.271 26.497,28.422 28.458,25.931 C23.509,24.676 16.875,25.781 16.875,25.781 z" fill="#FFCC00"/>
                <path id="." d="M149.991,16.997 L144.988,16.997 L144.988,21.996 L149.991,21.996 L149.991,16.997 z" fill="#FFCC00"/>
                </g>
                <text id="ProWriters" x="45.5%" y="70%" dominant-baseline="middle" text-anchor="middle"
                    style="font-size: 28px;line-height: 24px; font-family: Arial; fill1: #ffffff;">
                ProWritersAdmin
              </text>
                </svg>
                  </div>
                </div>
                <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                  <span>Writer Log In</span>
                </h6>
              </div>
              <div class="card-content">
                <div class="card-body">
                    
                      @if($message=Session::get('error'))
          
          
                        <h4 class="text-danger">{{ $message }}</h4>
           
                      @endif
                      
                      @if ($errors->any())
                       
                                @foreach ($errors->all() as $error)
                                    <h4 class="text-danger">{{ $error }}</h4>
                                @endforeach
                          
                     @endif
                    
                  <form id="login-form" class="form-horizontal form-simple" method="POST" action="/login">
                   @csrf
                    <!-- email -->
                    <div class="form-group">
                      <fieldset class="form-group position-relative has-icon-left mb-0">
                        <input type="email" class="form-control form-control-lg input-lg" id="writer-email" name="email"
                          placeholder="Enter email" required>
                        <div class="form-control-position">
                          <i class="ft-user"></i>
                        </div>
                      </fieldset>
                    </div>
                    <!-- password -->
                    <div class="form-group">
                      <fieldset class="form-group position-relative has-icon-left">
                        <input type="password" class="form-control form-control-lg input-lg" id="user-password"
                          name="password" placeholder="Enter password" required>
                        <div class="form-control-position">
                          <i class="ft-lock"></i>
                        </div>
                      </fieldset>
                    </div>
                    <!-- forgot password -->
                    <div class="extra-links">
                      <div class="sign-up"><a href="/accounts/signup-as/" class="card-link">Sign Up</a></div>
                      <div class="forgot-password"><a href="/password/reset/" class="card-link">Forgot Password?</a></div>
                    </div>
                    <button type="submit" class="btn btn-lg btn-block main-btn-color">
                      <i class="ft-unlock"></i> Log In
                    </button>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

@endsection