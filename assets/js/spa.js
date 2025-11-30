$(function(){

   //$("div.main").hide();
    $("div.gallery").hide();
    $("div.contacts").hide();
    $("div.login").hide();

    $("a.main").click(function($event){
        $event.preventDefault();
        $("div.main").toggle();
        $("div.gallery").hide();
        $("div.contacts").hide();
        $("div.login").hide();
    })

    $("a.gallery").click(function($event){
        $event.preventDefault();
        $("div.main").hide();
        $("div.gallery").toggle();
        $("div.contacts").hide();
        $("div.login").hide();
    })

    $("a.contact").click(function($event){
        $event.preventDefault();
        $("div.main").hide();
        $("div.gallery").hide();
        $("div.contacts").toggle();
        $("div.login").hide();
    })

    $("a.login").click(function($event){
        $event.preventDefault();
        $("div.main").hide();
        $("div.gallery").hide();
        $("div.contacts").hide();
        $("div.login").toggle();
    })



})