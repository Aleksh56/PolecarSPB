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

  function faqSlidesToggler(){}

  $(".faq__item-1").click(() => {
    $(".text-item-1").slideToggle("slow");
    $(".faq__item-1").toggleClass("faq_open");
    $(".text-item-1").css("display", "block");
    $(".solid-1").toggleClass("fa-angle-down")
    $(".solid-1").toggleClass("fa-angle-up")
  })

  $(".faq__item-2").click(() => {
    $(".text-item-2").slideToggle("slow");
    $(".faq__item-2").toggleClass("faq_open");
    $(".text-item-2").css("display", "block");
    $(".solid-2").toggleClass("fa-angle-down")
    $(".solid-2").toggleClass("fa-angle-up")
  })

  $(".faq__item-3").click(() => {
    $(".text-item-3").slideToggle("slow");
    $(".faq__item-3").toggleClass("faq_open");
    $(".text-item-3").css("display", "block");
    $(".solid-3").toggleClass("fa-angle-down")
    $(".solid-3").toggleClass("fa-angle-up")
  })

  $(".faq__item-4").click(() => {
    $(".text-item-4").slideToggle("slow");
    $(".faq__item-4").toggleClass("faq_open");
    $(".text-item-4").css("display", "block");
    $(".solid-4").toggleClass("fa-angle-down")
    $(".solid-4").toggleClass("fa-angle-up")
  })

  $(".faq__item-5").click(() => {
    $(".text-item-5").slideToggle("slow");
    $(".faq__item-5").toggleClass("faq_open");
    $(".text-item-5").css("display", "block");
    $(".solid-5").toggleClass("fa-angle-down")
    $(".solid-5").toggleClass("fa-angle-up")
  })

  $(".faq__item-6").click(() => {
    $(".text-item-6").slideToggle("slow");
    $(".faq__item-6").toggleClass("faq_open");
    $(".text-item-6").css("display", "block");
    $(".solid-6").toggleClass("fa-angle-down")
    $(".solid-6").toggleClass("fa-angle-up")
  })

  $(".faq__item-7").click(() => {
    $(".text-item-7").slideToggle("slow");
    $(".faq__item-7").toggleClass("faq_open");
    $(".text-item-7").css("display", "block");
    $(".solid-7").toggleClass("fa-angle-down")
    $(".solid-7").toggleClass("fa-angle-up")
  })


  const modal = document.querySelector(".modal"),
          contactUsButton = document.querySelectorAll("[data-modal]"),
          modalWindowCloseButton = document.querySelector("[data-modalClose]");

    function showModalWindow(){
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
    }

    function closeModalWindow(){
        modal.style.display = "none"
        document.body.style.overflow = ""
    }

    contactUsButton.forEach(btn => {
        btn.addEventListener("click", () => {
            showModalWindow();
        })
    });

    modalWindowCloseButton.addEventListener("click", () => {
        closeModalWindow();
    });

    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            closeModalWindow();
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape"){
            closeModalWindow();
        }
    });

});