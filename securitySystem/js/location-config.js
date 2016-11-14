
window.onload=function(){

    var navs=document.getElementById("nav").getElementsByTagName("li");
    navs[0].onclick=function(){
        window.location.href="internalInformation.html";
    }
    navs[1].onclick=function(){
        window.location.href="newUser.html";
    }
    navs[2].onclick=function(){
        window.location.href="help.html";
    }
    navs[3].onclick=function(){
        window.location.href="signin.html";
    }
}