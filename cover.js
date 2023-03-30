const header = document.querySelector("header");
const coverPage = document.querySelector(".cover-page");
const content  = document.querySelector(".content");
const body = document.querySelector("body");
const covertext = document.getElementById("cover-text");
const welcome = document.getElementById("welcome");


window.addEventListener("click", function(e) {
  if(e.target.classList.contains('cover-page') && coverPage.style.height === '30%'){
    coverPage.style.height = "100%";
    content.style.marginTop = "100vh";
    header.classList.remove("visible");
    body.classList.remove("scrolled");
    covertext.style.visibility = 'visible';
    welcome.style.visibility = 'visible';

    } else if(e.target.classList.contains('cover-page')){
      coverPage.style.height = "30%";
      content.style.marginTop = "30vh";
      header.classList.add("visible");
      body.classList.add("scrolled");
      covertext.style.visibility ='hidden';   
      welcome.style.visibility ='hidden';   
      
    }}
)

window.addEventListener("keypress", function(e){
  var divTop = content.getBoundingClientRect().top;
    if(coverPage.style.height != '30%'){
    coverPage.style.height = '30%';
    content.style.marginTop = "30vh";
    header.classList.add("visible");
    body.classList.add("scrolled");
    covertext.style.visibility ='hidden';
    welcome.style.visibility ='hidden';
    content.style.top = coverPage.clientHeight - divTop +'px';
  }
})
