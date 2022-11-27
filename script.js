const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Experience Section 
const goUp = document.querySelector('.goUP');
const sectionScrol = document.querySelector('.Experience-Section');
const spanScrol = document.querySelectorAll('.Expre-width');

  goUp.onclick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.onscroll = ()=>{
    if(window.scrollY >= sectionScrol.offsetTop - 350){
      spanScrol.forEach(span => {
        span.style.width = span.dataset.width;
      });
      goUp.classList.add('ifActive');
    }else{
      goUp.classList.remove('ifActive');
    }
  };


