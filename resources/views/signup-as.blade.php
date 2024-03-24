@extends('auth.layouts.index')
@section('content')
<div class="app-content content">
    <div class="content-wrapper" id="class-to-remove">
        <div class="content-body">
            <section class="flexbox-container">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <div class="col-md-7 box-shadow-2 p-0">
                        <div class="card border-grey border-lighten-3 m-0">
                            <div class="card-header border-0 pb-0">
                                <div class="card-title text-center">
                                    <div class="p-1">
                                        <img src="/public/static/img/logo-colored2.png" class="main-logo">
                                    </div>
                                </div>
                                <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                    <span>Signup as?</span>
                                </h6>
                            </div>
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-md-6">
                                            <div class="writer-card">
                                                <div class="writer-card-head main-color">
                                                    <i class="ft-user"></i>
                                                </div>
                                                <div class="writer-card-body">
                                                    <h4>Private Writer</h4>
                                                    <p>
                                                        A private writer has an employer and can only bid for orders from the employer.
                                                    </p>
                                                    <a href="/accounts/signup/private-writer/">
                                                        <button class="btn main-btn-color btn-block">Sign up</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="writer-card">
                                                <div class="writer-card-head main-color">
                                                    <i class="ft-user"></i>
                                                </div>
                                                <div class="writer-card-body">
                                                    <h4>Public Writer</h4>
                                                    <p>
                                                       A public writer has no employer and can only bid for orders with a public status.
                                                    </p>
                                                    <a href="/accounts/signup/public-writer/">
                                                        <button class="btn main-btn-color btn-block">Sign up</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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