let $title=document.querySelectorAll(".title");
let $elemento=document.querySelectorAll(".elemento");
let $text=document.querySelectorAll(".text");
let $arrow=document.querySelector(".arrow-down");
$elemento.forEach(e=>{
  e.addEventListener("click",e=>{
    e.preventDefault();
    const padre=e.target.parentNode;
    
    // padre.children[1].classList.remove("active");
    if(e.target.matches(".title")){

      console.log(e.target , "click")
      console.log(padre,"padre")
      padre.children[0].children[0].classList.toggle("rotate");
      padre.children[0].style.color="hsl(240, 26%, 7%)";
      padre.children[1].classList.toggle("active");
    }else{

      padre.children[0].children[0].classList.remove("rotate");
      // padre.children[0].style.color="hsl(14, 88%, 65%)";
    }


  })
})
