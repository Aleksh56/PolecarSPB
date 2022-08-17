$(document).ready(function(){

  const PROCESS_BUTTONS = document.querySelectorAll('#process__button'),
        BUTTONS_CONTAINER = document.querySelector('.process__buttons'),
        BUTTONS_CONTENT = document.querySelectorAll('#process__item-about'),
        LIST__CONTENT = document.querySelectorAll('.tech-del')

  function hideInfo(){
    BUTTONS_CONTENT.forEach(item => {
        item.style.display = "none";
    });
    PROCESS_BUTTONS.forEach(elem => {
        elem.classList.remove("process-activeBtn");
    })
    LIST__CONTENT.forEach((listItem)=>{
      listItem.style.display = 'list-item';
    })
  }

  function showInfo(i = 0){
    BUTTONS_CONTENT[i].classList.add("fadeIn");
    BUTTONS_CONTENT[i].style.display = "flex";
    PROCESS_BUTTONS[i].classList.add("process-activeBtn");
  }

  hideInfo();
  showInfo();

  BUTTONS_CONTAINER.addEventListener("click", (event) => {
    const target = event.target;

    if(target && target.classList.contains("process__button")){
        PROCESS_BUTTONS.forEach((item, i) =>{
            if(target == item){
                hideInfo();
                showInfo(i);
                if(i == 3){
                  LIST__CONTENT.forEach((listItem)=>{
                    listItem.style.display = 'none';
                  })
                }
            }
        });
    }
  });

});