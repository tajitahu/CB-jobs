
<!DOCTYPE html>

<html class="loading" lang="en" data-textdirection="ltr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Writers Admin - Signup as?</title>
  <!-- favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://www.writer.writersadmin.com/static/pwa/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="https://www.writer.writersadmin.com/static/pwa/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://www.writer.writersadmin.com/static/pwa/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="https://www.writer.writersadmin.com/static/pwa/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://www.writer.writersadmin.com/static/pwa/favicon-16x16.png">
  <link rel="manifest" href="/static/pwa/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="https://www.writer.writersadmin.com/static/pwa/ms-icon-144x144.png">
  <meta name="theme-color" content="#2575fc">
  <!-- favicons end-->
  <link rel="stylesheet" type="text/css" href="/public/static/robust/app-assets/css/vendors.min.css">
  <link rel="stylesheet" type="text/css" href="/public/static/robust/app-assets/css/app.min.css">
  <link rel="stylesheet" type="text/css" href="/public/static/robust/assets/css/style.css">
  <link href="/public/static/css/toastr.min.css" rel="stylesheet">
 
  <style>
  input {
    font-size: 16px !important;
  }
  #login-form{
    display:block;
  }
  .extra-links{
    display:flex;
    padding-bottom:1em;
  }
  .forgot-password{
    width:100%;
    text-align:right;
  }
  .sign-up{
    width:100%;
  }
</style>

  <style>
    .main-color{
      color: #2575fc;
    }
    .main-btn-color{
      background-color:#2575fc;
      color: #fff;
    }
    .main-logo{
      width:250px;
      max-width:100%;
    }
    .phone-wrapper{
        margin:2em 0;
    }
    /** custom scrollbar **/
    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 2.5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #696969;
      border-radius: 2.5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #696969;
    }
  </style>

<style>
    .writer-card{
        border-radius: 10px;
        cursor: pointer;
        margin: 10px;
    }
    .writer-card-head{
        padding: 1em;
        text-align: center;
    }
    .writer-card-head > i{
        font-size: 50px;
    }
    .writer-card-body{
        padding: 10px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 0 0 10px 10px;
    }
</style>

  <style>
    .main-color{
      color: #2575fc;
    }
    .main-btn-color{
      background-color:#2575fc;
      color: #fff;
    }
    .main-logo{
      width:250px;
      max-width:100%;
    }
    .phone-wrapper{
        margin:2em 0;
    }
    /** custom scrollbar **/
    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 2.5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #696969;
      border-radius: 2.5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #696969;
    }
  </style>
</head>

<body class="vertical-layout vertical-menu 1-column   menu-expanded blank-page blank-page" data-open="click" data-menu="vertical-menu" data-col="1-column">
  
@yield('content')
    
  <script src="/static/js/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="/public/static/js/toastr.min.js"></script>
  <script src="https://kit.fontawesome.com/2d84f47684.js" crossorigin="anonymous"></script>

  <!-- session messages -->
  <script>
    
  </script>

  <!-- whatsapp chat -->
  <script src="/public/js/whatsapp.js"></script>
  
<script>
    // remove content-wrapper class for small screens
    let class_to_remove = document.getElementById('class-to-remove');
    let screen_height = window.screen.height;

    if(screen_height < 848){
        class_to_remove.className = "phone-wrapper";
    }
</script>

</body>
</html>