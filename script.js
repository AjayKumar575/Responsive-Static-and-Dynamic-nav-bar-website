const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("ul");
const hidden = document.querySelector("hidden")

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("slide");

    hide();
})


function hide(){
    if(img==1){
        document.getElementById("img").style.display="inline"
        return img=0;
    }
    else{
        document.getElementById("img").style.display="none"
        return img=1;
    }
}