var url = 'https://prowriterstech.com/public/js/whatsapp_chat.js';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
            "enabled": true,
            "chatButtonSetting": {
                "backgroundColor": "#4dc247",
                "ctaText": "Contact Support",
                "borderRadius": "25",
                "marginLeft": "0",
                "marginBottom": "50",
                "marginRight": "50",
                "position": "right"
            },
            "brandSetting": {
                "brandName": "ProWriters",
                "brandSubTitle": "We are there for you.",
                "brandImg": "https://employer.writersadmin.com/apple-icon-114x114.png",
                "welcomeText": "Hi there!\nWelcome to ProWriters Support\nHow can we help you?",
                "messageText": "Hello ProWriters Support.",
                "backgroundColor": "#0a5f54",
                "ctaText": "Start Chat",
                "borderRadius": "25",
                "autoShow": false,
                "phoneNumber": "254764208488"
            }
        };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);