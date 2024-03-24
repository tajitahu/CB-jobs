// get push service subscription
const get_subscription = () => {
    swRegistration.pushManager.getSubscription().then((sub)=>{
        if(sub == null){
            console.log('Not subscribed to push service!');

            // subscribe user to push service if user allowed notifications
            if(Notification.permission==='granted'){
                subscribeUser();
            }
        }
        else{
            // we have a subscription, update the database
            update_database_subscription(sub);
        }
    })
}

// subscribe to push service
const subscribeUser = async () => {
    let data = await get_server_public_key();
    let public_key = data.public_key;

    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(public_key),
    })
    .then((subscription)=>{
        // we have a subscription, update the database
        update_database_subscription(subscription);
    })
    .catch((e)=>{
        if(Notification.permission === 'denied'){
            console.log('Permission for notifications was denied');
        }
        else{
            console.log('Unable to subscribe to push', e);
        }
    })
}

// ask if to allow push notifications
if(sStorage.getItem('prompt_to_enable_notifications') != "false"){
    if(Notification.permission==='default'){
        $('#subscribe-to-notifications').modal('toggle');
        $('#subscribe-to-notifications').modal('show');
    }
    sStorage.setItem('prompt_to_enable_notifications', false);
}

const ask_user_to_subscribe = () => {
    Notification.requestPermission((status)=>{
        $('#subscribe-to-notifications').modal('hide');
        // subscribe user to push service if user allowed notifications
        if(status==='granted'){
            subscribeUser();
        }
    });
}

// update subscription
const update_database_subscription = (subscription) => {
    if(sStorage.getItem('update_subscription') != "false"){
        let formData = new FormData();
        formData.append('subscription', JSON.stringify(subscription.toJSON()));
        
        update_subscription(formData).then((json)=>{
            if(json.success){
                sStorage.setItem('update_subscription', false);
            }
        });
    }
}

const update_subscription = async (formData) => {
    let response = await fetch('/notifications/update-subscription/', {method: 'POST', body: formData});
    let json = response.json();
    return json;
}

// get server public key
const get_server_public_key = async () => {
    let response = await fetch('/notifications/get-server-public-key/', {method: 'GET'});
    let json = response.json();
    return json;
}

// UInt8Array Converter
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}