const t1 = gsap.timeline();

t1.from("nav",{
    y:"-70px",
    duration:1,
})
t1.from("#right",{
    y:"-70px",
    duration:1,
})
t1.from("#text",{
    y:"-70px",
    duration:1,
    stagger:0.2,
})
t1.from("#button",{
    y:"70px",
    duration:1,
})
t1.from(".btn",{
    x:"-20px",
    durtaiom:1,
    stagger:0.2,
})

var count = 0;
document.querySelector("#menu").addEventListener('click',()=>{
    // if(count == 0){
    // document.querySelector("#main-menu").style.transform = "translateX(-100%)"
    // document.querySelector("#main-menu").style.transform = "translateX(-100vw)"
    document.querySelector("#main-menu").style.right = "0vw"
    // document.querySelector(".page").style.left = "-100vw"
//     count = 100 - 99;
//     count = 100 - 100;
// }
// else if(count == 1){
//     document.querySelector("#arrow").style.transform = "translateX(100%)"
//     count = 100 - 100;

// }
})

document.querySelector("#arrow").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    // document.querySelector("#main-menu").style.transform = "translateX(0vw)"
    document.querySelector("#main-menu").style.right = "-100vw"


})
// document.querySelector("#arrow").addEventListener('click',()=>{
//     // document.querySelector("#main-menu").style.transform = "translateX(0%)"
//     // document.querySelector("#main-menu").style.transform = "translateX(0vw)"
//     document.querySelector("#main-menu").style.right = "-100vw"

// })


document.querySelector("#arrow1").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#services").style.right = "-100vw"

})
document.querySelector("#arrow2").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#about").style.right = "-100vw"

})
document.querySelector("#arrow3").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#howtouse").style.right = "-100vw"

})



document.querySelector("#link1").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    // document.querySelector("#main-menu").style.transform = "translateX(0vw)"
    document.querySelector("#main-menu").style.right = "0vw"

})

document.querySelector("#link2").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#services").style.right = "0vw"
})

document.querySelector("#link3").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#about").style.right = "0vw"
})

document.querySelector("#link4").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#howtouse").style.right = "0vw"
})

document.querySelector("#link5").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    // document.querySelector("#main-menu").style.transform = "translateX(0vw)"
    document.querySelector("#main-menu").style.right = "-100vw"

})

document.querySelector("#link6").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#people").style.right = "0vw"
})

document.querySelector("#arrow5").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#chatpage").style.top = "100vh"

})

document.querySelector("#arrow7").addEventListener('click',()=>{
    // document.querySelector("#main-menu").style.transform = "translateX(0%)"
    document.querySelector("#people").style.right = "-100vw"

})


document.querySelector("#frontbutton").addEventListener('click',()=>{
    navigator.clipboard.writeText(window.location.href);
    alert("link copied to clip board");
    // console.log('hi')
  })
document.querySelector("#submit").addEventListener('click',()=>{
    document.querySelector("#prompt").style.display="none";
})
// gsap