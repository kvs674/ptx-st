    function onClickBox() {
        var arr = $('#checkbox').map(function() {
            return this.checked;
        }).get();
        localStorage.setItem("checked", JSON.stringify(arr));
        location.reload();
    }

    $(document).ready(function() {
        let checked;
        var arr = JSON.parse(localStorage.getItem('checked')) || [];
        arr.forEach(function(checked, i) {
            $('#checkbox').eq(i).prop('checked', checked);
        });

        $("#checkbox").click(onClickBox);

            if (arr[0]==true) {
                
               $('.tags-cloud a').css({'background-color':'#303030','color':'#dadada'});
               $('.pornstar-thumb-container .item').css({'background-color':'#202020'});
               $('.pornstars-lister').css({'background-color':'#101010'});
               $("#sun-img").attr("src","{{$config.statics_url}}/static/images/dark_sun.png");
               $('body').css('background','#000000');
               $('#pc-color-bg').css('background','#000000');
               $('.header').css('background','#202020');
               $('.search .search-text input').css('background','#000000');
               $('.search .search-button').css('background-color','#000000');
               $('#login,.username, .comment-text').css('color','#dadada');
               $('.container').css('background','#202020');
               $('.language-list a,.item .title, .dots, .headline h1, .headline h2, .headline a, .sidebar .list a, .member-links a, .footer-wrap a , .info em, .block-details .item, .list-tags .item a, .empty-content, .primary ').css('color','#dadada');
               $('.sidebar .list a, .search-button').css('color','#dadada')
               $('.navigation-main .primary .dropdown-vars a, .block-channel h2').css('color','#dadada')
               $('.xh-dropdown .dropdown, .channels-content').css('background','#202020');
               $('.dropdown-vars, .channels-image-edit .item, .channel-rating .disabled').css('background','#303030');
               $('.primary .dropdown-vars img, .block-comments img').css('filter','invert(1)');
               $('.headline .channel-rating img').css('filter','invert(0)');
if($(window).width() <= 1152){
               $('#login').css('color','#000')
               $('.sidebar .list a').css('color','#000')
                   }
               $('.channel-rating img').css('filter','invert(0)');
               $('.sidebar img').css('filter','invert(1)');
               $('.video-container-show .headline img').css('filter','invert(1)');
               $('.member-links img, sidebar-links').css('filter','invert(1)');
               $('form label').css('color','#7b7b7b');
               $('.navigation .button .ico-bar').css('background','#dadada');
               $('.pagination .page-current span').css({'color':'#303030','background-color':'#dadada'});
               $('.pagination a').css({'color':'#dadada','background-color':'#303030'});
               $('#logo-changer').attr('src','{{$config.statics_url}}/static/images/hamsterx-w.png');
               $('.no-touch .navigation-main .primary a').hover(function(e) {
  $(this).css("background-color",e.type === "mouseenter"?"#202020":"transparent")
});
               $('.no-touch .sidebar .list a').hover(function(e) {
  $(this).css("background-color",e.type === "mouseenter"?"#666":"transparent")
});
               $(".headline a").hover(function(e) {
  $(this).css("background-color",e.type === "mouseenter"?"#4c4c4c":"")
});
 $('.page').click(function(){
setTimeout(function(){
   location.reload();
}, 600); });
               $('.prev').click(function(){
setTimeout(function(){
   location.reload();
}, 600); });
               $('.next').click(function(){
setTimeout(function(){
   location.reload();
}, 600);});

            } else {
               $("#moon-img").attr("src","{{$config.statics_url}}/static/images/dark_moon.png");
               
            }
    });

    $('#main-mobile-search').click(function(){
      $('.search').slideToggle('fast');
      $('.navigation').removeClass('open');
      $('.fadescreen').css({'z-index': '-99',
    'overflow': 'auto',
    'position': 'fixed',
    'opacity': '0',
    'left': '0',
    'width': '100%',
    'height': '150%',
    'background': '#000'});
    $('html').css({'position':'unset',
    'overflow':'unset'});
});
$('.navigation').click(function(){
   if($('.navigation').hasClass('open')){
       $('.fadescreen').css({'z-index': '98',
    'overflow': 'auto',
    'position': 'fixed',
    'opacity': '0.5',
    'left': '0',
    'width': '100%',
    'height': '150%',
    'background': '#000'});
     $('html').css({'position':'',
    'overflow':'hidden'});
    
      $('.search').hide();
}else{
    $('.fadescreen').css({'z-index': '-99',
    'overflow': 'auto',
    'position': 'fixed',
    'opacity': '0',
    'left': '0',
    'width': '100%',
    'height': '150%',
    'background': '#000'});
    $('html').css({'position':'unset',
    'overflow':'unset'});
}
});
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });
    $('.up-arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
if($(window).width() <= 1152){
$('.swith-mobile').append($('.container-switcher'));
}

$('.languagebox').click(function(){
$('.language-list').toggle();
$('.navigation').addClass('open');
});
$('.container').on('click', function(){
    $('.language-list').hide();
    $('.navigation').removeClass('open');
      $('.fadescreen').css({'z-index': '-99',
    'overflow': 'auto',
    'position': 'fixed',
    'opacity': '0',
    'left': '0',
    'width': '100%',
    'height': '150%',
    'background': '#000'});
    $('html').css({'position':'unset',
    'overflow':'unset'});
});
$('.languagebox, .language-list, .navigation').on('click', function(e){
    e.stopPropagation();
});
          
const value = $.cookie("kt_lang"); 

$('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/gb.gif)');

if(value=='ru'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/ru.gif)');
  $('.lang-text-mob').text('Русский');
}
if(value=='en'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/gb.gif)');
  $('.lang-text-mob').text('English');
}
if(value=='de'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/de.gif)');
  $('.lang-text-mob').text('Deutsch');
}
if(value=='fr'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/fr.gif)');
  $('.lang-text-mob').text('Français');
}
if(value=='it'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/it.gif)');
  $('.lang-text-mob').text('Italiano');
}
if(value=='es'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/es.gif)');
  $('.lang-text-mob').text('Español');
}
if(value=='pl'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/pl.gif)');
  $('.lang-text-mob').text('Polski');
}
if(value=='pt'){
  $('.xh-button').css('background-image','url(/static/images/flags/pt.gif)');
  $('.lang-text-mob').text('Português');
}
if(value=='nl'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/nl.gif)');
  $('.lang-text-mob').text('Nederlands');
}
if(value=='ja'){
  $('.xh-button').css('background-image','url({{$config.statics_url}}/static/images/flags/jp.gif)');
  $('.lang-text-mob').text('日本語');
}

$(function() {
  $('#videos-hover').hover(function() {
    $('.dropdown-vars').css('visibility', 'visible');
  }, function() {
    $('.dropdown-vars').css('visibility', 'hidden');
  });
});  

$('.dropdown-vars li a').css('color','#303030'); 


let theme = localStorage.getItem('checked');
if(theme==true){
alert()
$('.mob-link_search').css('color','#dadada');
}
$(".fade-models").hide(0).delay(2000).fadeIn(2500)