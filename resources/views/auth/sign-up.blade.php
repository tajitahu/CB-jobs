@extends('auth.layouts.index')
@section('content')
<div class="app-content content">
  <div class="content-wrapper" id="class-to-remove">
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
                  <span>Sign up as a public writer</span>
                </h6>
              </div>

              <div class="card-content">
                <div class="card-body">
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                  <!-- public writer signup -->
                  <form id="signup-form" class="form-horizontal form-simple" method="POST" action="/register">
                   @csrf
                    <div class="row">
                        <div class="col-sm-6 pd-right">
                            <div class="form-group">
                                <input type="text" name="fname" class="form-control" placeholder="First name" required>
                            </div>
                        </div>
                        <div class="col-sm-6 pd-left">
                            <div class="form-group">
                                <input type="text" name="lname" class="form-control" placeholder="Last name" required> 
                            </div>
                        </div> 
                    </div> 

                    <div class="row">
                        <div class="col-sm-6 pd-right">
                            <div class="form-group">
                                <input type="email" name="email" id="input-email" class="form-control" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="col-sm-6 pd-left">
                            <div class="form-group">
                                <input type="text" name="phone" class="form-control" placeholder="Phone" maxlength="13" required>
                            </div>
                        </div>
                        <div class="col-sm-12 ">
                            <div class="form-group">
                                <input type="text" name="username" class="form-control" placeholder="Username" maxlength="13" required>
                            </div> 
                        </div> 
                    </div>

                    <div class="form-group">
                        <select name="field" class="form-control" required>
                            <option value="">Writing field</option>
                            <option value="academic">Academic writing</option>
                            <option value="article">Article writing</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pd-right">
                            <div class="form-group">
                                <input type="password" name="password" id="input-password" class="form-control" placeholder="password" required>
                            </div>
                        </div>
                        <div class="col-sm-6 pd-left">
                            <div class="form-group">
                                <input type="password" name="password_confirmation" class="form-control" placeholder="confirm password" maxlength="200" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-lg btn-block main-btn-color">
                            Sign up <img src="/public/static/icons/arrow-right.svg" style="width:20px;">
                        </button>
                    </div>

                    <p>
                      <span class="text-mute">Already signed up?</span>
                      <a href="/login/">Login.</a>
                    </p>
                  </form>
                  <input type="file" id="avatar" onchange={append_avatar(event)} style="display:none;"> 
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