document.addEventListener('DOMContentLoaded', function() {
    let keyPopup = 'checkPopup';
    if (!sessionStorage.getItem(keyPopup)) {
        sessionStorage.setItem(keyPopup, 1);
        setTimeout(function () {
            $('#adsModal').modal('show');
        },3500);

        /*setTimeout(function () {
            $('#adsModal').modal('hide');
        },8500);*/

        let url = $("#adsModal").find('a').attr('href');

        $("#adsModal").on('hide.bs.modal', function(){
            window.open(url,"_blank");
        });
    }

    // remove banner closed
    /*let key_session = Object.keys(sessionStorage);
    $.each(key_session, function (key, val) {
        $('.ads-container[data-position="'+val+'"]').remove();
    });*/

    // load banner
    setTimeout(function () {
        $('.banners img:not([src])').each(function () {
            let _this = $(this);
            _this.attr('src', _this.data('src'));
            _this.closest('.ads-container').attr('data-loaded', 1);
        });
    }, 3500);
    /*$('#adsModal img:not([src])').each(function () {
        $(this).attr('src', $(this).data('src')).parent().attr('data-load', 1);
    });*/

    $('body').on('click','.banner-close .close-icon',function () {
        let key = $(this).parents('.ads-container').attr('data-position');
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, 1);
        }  else {
            let current = sessionStorage.getItem(key);
            let new_val = parseInt(current) + 1;
            sessionStorage.setItem(key, new_val);
        }

        if (key.includes("catfish")) {
            $(this).parents('.ads-container').parent('.fixed-bottom').remove();
        } else {
            $(this).parents('.ads-container').remove();
        }
    });
});

const FUNC = {
    ajax_load_more: function() {
        $(document).on('click', '.load-more', function (e) {
            e.preventDefault();
            let page = $(this).data('page');
            if (!page) page = 2;
            $.ajax({
                type: 'get',
                url: '',
                dataType: 'html',
                data: {
                    page: page,
                },
                success: function (res) {
                    let selector_show_content = '#ajax_content';
                    let resultFind = $(res).find('#ajax_content').html();
                    if (resultFind) {
                        $(selector_show_content).append(resultFind);
                    }
                    $('.load-more').data('page', page + 1);
                }
            })
        })
    },
    init: function () {
        FUNC.ajax_load_more();
    }
};
$(document).ready(function () {
    FUNC.init();
});

/*! RateIt | v1.1.2 / 03/28/2019
    https://github.com/gjunge/rateit.js | Twitter: @gjunge
*/
!function(M){function I(e){var t=e.originalEvent.changedTouches[0],a="";switch(e.type){case"touchmove":a="mousemove";break;case"touchend":a="mouseup";break;default:return}var i=document.createEvent("MouseEvent");i.initMouseEvent(a,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i),e.preventDefault()}M.rateit={aria:{resetLabel:"reset rating",ratingLabel:"rating"}},M.fn.rateit=function(w,N){var y=1,C={},k="init",E=function(e){return e.charAt(0).toUpperCase()+e.substr(1)};if(0===this.length)return this;var e=M.type(w);if("object"==e||null==w)C=M.extend({},M.fn.rateit.defaults,w);else{if("string"==e&&"reset"!==w&&void 0===N)return this.data("rateit"+E(w));"string"==e&&(k="setvalue")}return this.each(function(){var r=M(this),n=function(e,t){if(null!=t){var a="aria-value"+("value"==e?"now":e),i=r.find(".rateit-range");null!=i.attr(a)&&i.attr(a,t)}return e="rateit"+E(e),r.data.apply(r,arguments)};if("reset"==w){var e=n("init");for(var t in e)r.data(t,e[t]);if(n("backingfld"))"SELECT"==(a=M(n("backingfld")))[0].nodeName&&"index"===a[0].getAttribute("data-rateit-valuesrc")?a.prop("selectedIndex",n("value")):a.val(n("value")),a.trigger("change"),a[0].min&&(a[0].min=n("min")),a[0].max&&(a[0].max=n("max")),a[0].step&&(a[0].step=n("step"));r.trigger("reset")}r.hasClass("rateit")||r.addClass("rateit");var i="rtl"!=r.css("direction");if("setvalue"==k){if(!n("init"))throw"Can't set value before init";if("readonly"!=w||1!=N||n("readonly")||(r.find(".rateit-range").unbind(),n("wired",!1)),"value"==w&&(N=null==N?n("min"):Math.max(n("min"),Math.min(n("max"),N))),n("backingfld"))"SELECT"==(a=M(n("backingfld")))[0].nodeName&&"index"===a[0].getAttribute("data-rateit-valuesrc")?"value"==w&&a.prop("selectedIndex",N):"value"==w&&a.val(N),"min"==w&&a[0].min&&(a[0].min=N),"max"==w&&a[0].max&&(a[0].max=N),"step"==w&&a[0].step&&(a[0].step=N);n(w,N)}if(!n("init")){var a;if(n("mode",n("mode")||C.mode),n("icon",n("icon")||C.icon),n("min",isNaN(n("min"))?C.min:n("min")),n("max",isNaN(n("max"))?C.max:n("max")),n("step",n("step")||C.step),n("readonly",void 0!==n("readonly")?n("readonly"):C.readonly),n("resetable",void 0!==n("resetable")?n("resetable"):C.resetable),n("backingfld",n("backingfld")||C.backingfld),n("starwidth",n("starwidth")||C.starwidth),n("starheight",n("starheight")||C.starheight),n("value",Math.max(n("min"),Math.min(n("max"),isNaN(n("value"))?isNaN(C.value)?C.min:C.value:n("value")))),n("ispreset",void 0!==n("ispreset")?n("ispreset"):C.ispreset),n("backingfld"))if(((a=M(n("backingfld")).hide()).attr("disabled")||a.attr("readonly"))&&n("readonly",!0),"INPUT"==a[0].nodeName&&("range"!=a[0].type&&"text"!=a[0].type||(n("min",parseInt(a.attr("min"))||n("min")),n("max",parseInt(a.attr("max"))||n("max")),n("step",parseInt(a.attr("step"))||n("step")))),"SELECT"==a[0].nodeName&&1<a[0].options.length){"index"===a[0].getAttribute("data-rateit-valuesrc")?(n("min",isNaN(n("min"))?Number(a[0].options[0].index):n("min")),n("max",Number(a[0].options[a[0].length-1].index)),n("step",Number(a[0].options[1].index)-Number(a[0].options[0].index))):(n("min",isNaN(n("min"))?Number(a[0].options[0].value):n("min")),n("max",Number(a[0].options[a[0].length-1].value)),n("step",Number(a[0].options[1].value)-Number(a[0].options[0].value)));var s=a.find("option[selected]");1==s.length&&("index"===a[0].getAttribute("data-rateit-valuesrc")?n("value",s[0].index):n("value",s.val()))}else n("value",a.val());var d="DIV"==r[0].nodeName?"div":"span";y++;var l='<button id="rateit-reset-{{index}}" type="button" data-role="none" class="rateit-reset" aria-label="'+M.rateit.aria.resetLabel+'" aria-controls="rateit-range-{{index}}"><span></span></button><{{element}} id="rateit-range-{{index}}" class="rateit-range"'+(1==n("readonly")?"":' tabindex="0"')+' role="slider" aria-label="'+M.rateit.aria.ratingLabel+'" aria-owns="rateit-reset-{{index}}" aria-valuemin="'+n("min")+'" aria-valuemax="'+n("max")+'" aria-valuenow="'+n("value")+'"><{{element}} class="rateit-empty"></{{element}}><{{element}} class="rateit-selected"></{{element}}><{{element}} class="rateit-hover"></{{element}}></{{element}}>';r.append(l.replace(/{{index}}/gi,y).replace(/{{element}}/gi,d)),i||(r.find(".rateit-reset").css("float","right"),r.find(".rateit-selected").addClass("rateit-selected-rtl"),r.find(".rateit-hover").addClass("rateit-hover-rtl")),"font"==n("mode")?r.addClass("rateit-font").removeClass("rateit-bg"):r.addClass("rateit-bg").removeClass("rateit-font"),n("init",JSON.parse(JSON.stringify(r.data())))}var o="font"==n("mode");o||r.find(".rateit-selected, .rateit-hover").height(n("starheight"));var u=r.find(".rateit-range");if(o){for(var m=n("icon"),v=n("max")-n("min"),h="",c=0;c<v;c++)h+=m;u.find("> *").text(h),n("starwidth",u.width()/(n("max")-n("min")))}else u.width(n("starwidth")*(n("max")-n("min"))).height(n("starheight"));var g="rateit-preset"+(i?"":"-rtl");if(n("ispreset")?r.find(".rateit-selected").addClass(g):r.find(".rateit-selected").removeClass(g),null!=n("value")){var f=(n("value")-n("min"))*n("starwidth");r.find(".rateit-selected").width(f)}var p=r.find(".rateit-reset");!0!==p.data("wired")&&p.bind("click",function(e){e.preventDefault(),p.blur();var t=M.Event("beforereset");if(r.trigger(t),t.isDefaultPrevented())return!1;r.rateit("value",null),r.trigger("reset")}).data("wired",!0);var b=function(e, t){var a=(t.changedTouches?t.changedTouches[0].pageX:t.pageX)-M(e).offset().left;return i||(a=u.width()-a),a>u.width()&&(a=u.width()),a<0&&(a=0),f=Math.ceil(a/n("starwidth")*(1/n("step")))},x=function(e){var t=M.Event("beforerated");return r.trigger(t,[e]),!t.isDefaultPrevented()&&(n("value",e),n("backingfld")&&("SELECT"==a[0].nodeName&&"index"===a[0].getAttribute("data-rateit-valuesrc")?M(n("backingfld")).prop("selectedIndex",e).trigger("change"):M(n("backingfld")).val(e).trigger("change")),n("ispreset")&&(u.find(".rateit-selected").removeClass(g),n("ispreset",!1)),u.find(".rateit-hover").hide(),u.find(".rateit-selected").width(e*n("starwidth")-n("min")*n("starwidth")).show(),r.trigger("hover",[null]).trigger("over",[null]).trigger("rated",[e]),!0)};n("readonly")?p.hide():(n("resetable")||p.hide(),n("wired")||(u.bind("touchmove touchend",I),u.mousemove(function(e){!function(e){var t=e*n("starwidth")*n("step"),a=u.find(".rateit-hover");if(a.data("width")!=t){u.find(".rateit-selected").hide(),a.width(t).show().data("width",t);var i=[e*n("step")+n("min")];r.trigger("hover",i).trigger("over",i)}}(b(this,e))}),u.mouseleave(function(e){u.find(".rateit-hover").hide().width(0).data("width",""),r.trigger("hover",[null]).trigger("over",[null]),u.find(".rateit-selected").show()}),u.mouseup(function(e){var t=b(this,e)*n("step")+n("min");x(t),u.blur()}),u.keyup(function(e){38!=e.which&&e.which!=(i?39:37)||x(Math.min(n("value")+n("step"),n("max"))),40!=e.which&&e.which!=(i?37:39)||x(Math.max(n("value")-n("step"),n("min")))}),n("wired",!0)),n("resetable")&&p.show()),u.attr("aria-readonly",n("readonly"))})},M.fn.rateit.defaults={min:0,max:5,step:.5,mode:"bg",icon:"★",starwidth:16,starheight:16,readonly:!1,resetable:!0,ispreset:!1},M(function(){M("div.rateit, span.rateit").rateit()})}(jQuery);
$(document).on('click', '.rateit', function () {
    let request = {
        star: $(this)[0].lastElementChild.ariaValueNow,
        url: $(this).data('url')
    };
    var _this = $(this);
    $.ajax({
        url: '/rating/rating',
        data: request,
        type: 'POST',
        dataType: 'json',
        success: function (res) {
            _this.next('.danhgia').find('.avg-rate').text(res.avg);
            _this.next('.danhgia').find('.count-rate').text(res.count);
        }
    });
});
