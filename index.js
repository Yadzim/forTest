
const btn = document.querySelector(".btn");
const b = document.querySelector(".b");
const p = document.querySelector(".p");
const box = document.querySelector(".box");

let click1 = false;
let click2 = false;

btn.addEventListener("click", ()=>{
  if(click1){
    box.style.animationName="res2"
    click1=false;
  }else{
    box.style.animationName="res1"
    click1=true;
  }
})

b.addEventListener("click", ()=>{
  if(click2){
    p.style.animationName="zoomOut"
    click2=false;
  }else{
    p.style.animationName="zoomIn"
    click2=true;
  }
})
