/*Typing Animation*/
var typed = new Typed(".typing",{
    strings:["","IT Technician","Student at PLP Academy"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* Aside*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList =navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;
for(let i=0; i<totalNavList; i++){
   
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(active){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove(".section");
        }
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains(active)){
             allSection[j].classList.add(".section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        ShowSection(this);
    })
}
function ShowSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
// Example navigation handling



