// register service worker
var swRegistration = null;
const sStorage = sessionStorage;

if('serviceWorker'in navigator){
    navigator.serviceWorker.register('/sworker.js/')
    .then((registration)=>{
        swRegistration = registration;
        get_subscription();
    })
    .catch((error)=>{
        console.log('Service worker registration failed:', error);
    })
}
else{
    console.log('Service workers are not supported on this browser.');
}