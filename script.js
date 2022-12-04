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

// Contact send to Email

  document.querySelector('.EmailButton').onclick= e => {
    e.preventDefault()
    const {name , Emaill , Projet , Message} = document.forms[0]
    if(!name.value || !Emaill.value || !Projet.value || !Message.value){
      notify("info",'tous les champ sont obligatoire !!');
      return
    }
    Email.send({
        SecureToken : "b141bddc-2a1c-4026-ab6b-e67fe90f4ccb",
        To : 'yassinediwani444@gmail.com',
        From : 'yassinediwani444@gmail.com',
        Subject : Projet.value,
        Body : Message.value
    }).then(
    () => notify("success",'message envoyer !!')
    );
}

// Notification script

  function notify(type,message){
      let n = document.createElement("div");
      let id = Math.random().toFixed(3);
      n.setAttribute("id",id)
      n.innerText = message
      n.classList.add("notification",type);
      document.getElementById('notification-area').appendChild(n);
      setTimeout(()=>{
        let notification = document.getElementById('notification-area').getElementsByClassName('notification');
        for(let i =0 ; i<notification.length;i++){
          if(notification[i].getAttribute("id") == id){
            notification[i].remove();
            break
          }
        }
      },3000)
  }

document.querySelector('.cvTelecharger').onclick = () => {
  notify('success','PDF installed')
}

// Add Leave-message script
const RemoveId = Status => {
  if(Status){
    LeaveMessage.setAttribute('id',"Show");
    return
  }
  LeaveMessage.removeAttribute('id');
}

const btnMessageMe = document.querySelector('#Contact-me'),
      LeaveMessage = document.querySelector('.Leave-Message'),
      CancelButton = document.querySelector('.Cancel'),
      closeButton = document.querySelector('.closex'),
      sendMessage = document.querySelector('.send-Leave-Message'),
      textarea = document.querySelector('.TextMessage'),
      Ask = document.querySelectorAll('.Ask');

btnMessageMe.addEventListener('click',()=>{RemoveId(true);textarea.value = ""});
CancelButton.addEventListener('click',()=>{RemoveId(false);textarea.value = ""});
closeButton.addEventListener('click',()=>{RemoveId(false);textarea.value = ""});
Ask.forEach(one => one.addEventListener('click',()=>RemoveId(true)));
sendMessage.addEventListener('click',()=>{
  if(!textarea.value){
    notify("info",'Write something first !!');
    CancelButton.click()
    return
  }
  Email.send({
      SecureToken : "b141bddc-2a1c-4026-ab6b-e67fe90f4ccb",
      To : 'yassinediwani444@gmail.com',
      From : 'yassinediwani444@gmail.com',
      Subject : "Comment from dak site dyalk",
      Body : textarea.value
  }).then(
  () => {
    notify("success",'message envoyer !!');
    textarea.value = "";
    CancelButton.click();
  }
  );
})