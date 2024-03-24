function stickyFooter() {
    var header = document.getElementsByTagName('header');
    var footer = document.getElementsByTagName('footer');
    var main = document.getElementsByTagName('main');
    if (header.length <= 0 || footer <= 0 || main <= 0)
        return false;

    try {
        var headerHeight = header[0].offsetHeight;
        var footerHeight = footer[0].offsetHeight;
        var mainHeight = main[0].offsetHeight;
        var windowHeight = window.innerHeight;

        var totalHeight = headerHeight + footerHeight + mainHeight;

        if (totalHeight < windowHeight) {
            footer[0].className += ' sticky-footer';
        }
    } catch (err) {
    }
}

stickyFooter();
function startEarning(a) {
    var b = a.parent().find("input").val().trim();
    return b.length <= 0/*||!/\S+@\S+\.\S+/.test(b)*/ ? (a.parent().find("input").addClass("haserror"), !1) : (a.parent().submit());
}
function setCookie(a, b, c) {
    var d = new Date;
    if (void 0 !== c) {
        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
        var e = "expires=" + d.toUTCString();
        document.cookie = a + "=" + b + ";" + e + ";path=/"
    } else document.cookie = a + "=" + b + ";path=/"
}
var count_capthcha = 0;
$(function () {
    $("body").on("submit", 'form[name="login"]', function (a) {
        c = $(this).find('input[name="password"]');
        if(c.val().length <= 0) {
            c.parent(".login-form__control").addClass("haserror");
        }
    }),
    $("body").on("keyup", ".haserror input", function () {
        $(this).parent(".haserror").find('p.error').remove();
        $(this).parent(".haserror").removeClass("haserror");
    }), $("body").on("submit", 'form[name="login"]', function (a) {
        var b = $(this).find('input[name="login[email]"]'), c = $(this).find('input[name="login[password]"]');
        return $(this).parent().find(".text-center.error").remove(), b.val().length <= 0 ? (b.parent(".login-form__control").addClass("haserror"), b.before('<p class="text-center error">Please fill in the required fields</p>'), !1) : /\S+@\S+\.\S+/.test(b.val()) && !/[а-яА-ЯёЁіІїЇєЄґҐ]/i.test(b.val()) ? c.val().length <= 0 ? ( b.before('<p class="text-center error">Please fill in the required fields</p>'), !1) : void 0 : (b.parent(".login-form__control").addClass("haserror"), b.before('<p class="text-center error">Please enter a valid email</p>'), !1)
    }), $("body").on("submit", 'form[name="forgot"]', function (a) {
        var b = $(this).find('input[name="forgot[email]"]');
        return $(this).parent().find(".error").remove(), $(this).parent().find(".success").remove(), b.val().length <= 0 ? (b.parent().addClass("haserror"), $('<p class="error">Please fill in the required fields</p>').prependTo('#forgot'), !1) : /\S+@\S+\.\S+/.test(b.val()) && !/[а-яА-ЯёЁіІїЇєЄґҐ]/i.test(b.val()) ? void 0 : (b.parent().addClass("haserror"), $('<p class="error">Please enter a valid email</p>').prependTo('#forgot'), !1)
    }), $("body").on("keyup", "input, textarea", function () {
        $(this).parents(".error").find("p.error").remove(), "contacts_subject" == $(this).attr("id") && $(this).parents("form").find(".error.subject").remove(), $(this).parents(".error").removeClass("error")
    }).on("change", "select, radio, checkbox", function () {
        $(this).parents(".error").find("p.error").remove(), "contacts_subject" == $(this).attr("id") && $(this).parents("form").find(".error.subject").remove(), $(this).parents(".error").removeClass("error")
    }), $("body").on("submit", 'form[name="contacts"]', function () {
        $(this).find("p.error").remove(), $(this).find(".error").removeClass("error");
        var a = $(this).find("#contacts_name").val(), b = $(this).find("#contacts_subject").val(), c = $(this).find("#contacts_email").val(), d = $(this).find("#contacts_text").val(), e = $(this).find("#contacts_captcha_text").val();
        if ("" != a && "" != c && /\S+@\S+\.\S+/.test(c) && !/[а-яА-ЯёЁіІїЇєЄґҐ]/i.test(c) && "" != d && "" != b && "" != e) {
            $(this).find('button').prop('disabled', true);
            ga('gtm1.send', 'event', 'contact_us', 'sendform');
            return !0;
        }
        ;
        var errorStatus = 0;
        if ("" == e) {
            $(this).find("#contacts_captcha_text").parent().addClass("error");
            var f = '<p class="error" style="margin-bottom: 0px;margin-top: 3px;">Captcha should not be blank</p>';
            $("#contacts_captcha_text").after(f);
            errorStatus = 1;
        }
        if ("" == a) {
            $(this).find("#contacts_name").parent().addClass("error");
            var f = '<p class="error" style="margin-bottom: 0px;margin-top: 3px;">Please enter a name</p>';
            $("#contacts_name").after(f);
            errorStatus = 1;
        }
        if ("" == b) {
            $(this).find("#contacts_subject").parent().addClass("error");
            var f = '<p class="error subject" style="margin-top: 3px;">Subject should not be blank</p>';
            $("#contacts_subject").parent().append(f);
            errorStatus = 1;
        }
        if ("" == d) {
            $(this).find("#contacts_text").parent().addClass("error");
            var f = '<p class="error" style="margin-bottom: 0px;margin-top: 3px;">Please enter your message</p>';
            $("#contacts_text").after(f);
            errorStatus = 1;
        }
        if ("" == c) {
            $(this).find("#contacts_email").parent().addClass("error");
            var f = '<p class="error" style="margin-bottom: 0px;margin-top: 3px;">Email can\'t be empty</p>';
            $("#contacts_email").after(f);
            errorStatus = 1;
        } else if (!/\S+@\S+\.\S+/.test(c) || /[а-яА-ЯёЁіІїЇєЄґҐ]/i.test(c)) {
            $(this).find("#contacts_email").parent().addClass("error");
            var f = '<p class="error" style="margin-bottom: 0px;margin-top: 3px;">Please enter a valid email</p>';
            $("#contacts_email").after(f);
            errorStatus = 1;
        }
        !errorStatus && $(this).find('button').prop('disabled', true);
        return !1
    }), $(".refresh-img").click(function () {
        var a = $(this).next().attr("src");
        count_capthcha > 0 ? jQuery(".captcha__image").attr("src", a + "&ver=" + (count_capthcha + 1)) : jQuery(".captcha__image").attr("src", a + "?ver=" + count_capthcha), count_capthcha++
    }), $("#contacts_name, #contacts_text, #contacts_email, #contacts_subject, #contacts_captcha_text, #email, #re-email, #login_email, #alternative-email").keypress(function (a) {
        String.fromCharCode(a.which).match(/[а-яА-Я-]/) && a.preventDefault()
    }), $("#recovery").on("keypress", 'input[type="password"]', function () {
        $(this).parent().hasClass("has-error") && ($(this).parent().removeClass("has-error"), $(this).parent().find("ul").remove())
    }), $(".recovery-form").submit(function () {
        $(this).find("ul").remove()
    })
}), $("a.read-more-link").click(function (a) {
    a.preventDefault();
    var b = $(this).attr("href"), c = $(this);
    $(b).toggleClass("active", function () {
        $(b).hasClass("active") ? c.text("Hide") : c.text("Read More ...")
    })
});