const chatBtn1 = document.querySelector(".chat-button1");
const chatBtn2 = document.querySelector(".chat-button2");
const chatBtn3 = document.querySelector(".chat-button3");
const chatDisplay = document.querySelector(".list-display");
const mentDisplay = document.querySelector(".ment-display");
const listDisplay = document.querySelector(".chat-display");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleMenu = document.querySelector(".toggle-menu");

chatBtn1.addEventListener("click",()=>{
    chatDisplay.classList.add("on");
    mentDisplay.classList.remove("on");
    listDisplay.classList.add("off");
    toggleMenu.classList.remove('on');  

})
chatBtn2.addEventListener("click",()=>{
    mentDisplay.classList.remove("on");
    chatDisplay.classList.remove("on");
    listDisplay.classList.remove("off");
    toggleMenu.classList.remove('on');  

})
chatBtn3.addEventListener("click",()=>{
    mentDisplay.classList.add("on");
    chatDisplay.classList.remove("on");
    listDisplay.classList.add("off");
    toggleMenu.classList.remove('on');  

})

// 토글버튼------------------------------------------


toggleBtn.addEventListener("click",()=>{
   toggleMenu.classList.add("on");  
   mentDisplay.classList.remove("on");
   chatDisplay.classList.remove("on");
   listDisplay.classList.add("off");
})